import { addDoc, collection, getDocs, query, Timestamp, where } from "firebase/firestore/lite";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import Stripe from "stripe";
import { db } from "utils/firebase";
import { stripe } from '../../services/stripe'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const session = await getSession({ req })

    const userRef = collection(db, 'users')
    const q = query(userRef, where('email', '==', session?.user?.email))
    const userSpanshot = await getDocs(q)

    if (!userSpanshot.empty) {

      const userOfSub = userSpanshot.docs.map(user => { return { id: user.id, ...user.data() } })

      const { id } = userOfSub[0]

      const subscriptionRef = collection(db, 'subscriptions')
      const querySubs = query(subscriptionRef, where('userId', '==', id))
      const subscriptionSnapshot = await getDocs(querySubs)

      let customerId = null

      if (subscriptionSnapshot.empty) {
        const stripeCustomer = await stripe?.customers.create({
          email: session?.user?.email || ''
        })

        await addDoc(subscriptionRef, {
          stripe_customer_id: stripeCustomer.id,
          userId: id,
          created_at: Timestamp.now(),
          expired: false,
          newSub: true,
          paidStatus: 'create_sub',
          subSince: Timestamp.now()
        })

        customerId = stripeCustomer.id
      }

      let payloadCreateCheckoutSubscription = {} as Stripe.Checkout.SessionCreateParams

      if (customerId) {
        payloadCreateCheckoutSubscription = {
          customer: customerId,
          payment_method_types: ['card'],
          billing_address_collection: 'required',
          line_items: [
            {
              price: 'price_1LnPEoAhlNoLCPMM7EIKeuFm', quantity: 1
            }
          ],
          mode: 'subscription',
          allow_promotion_codes: true,
          success_url: process.env.STRIPE_SUCCESS_URL || '',
          cancel_url: process.env.STRIPE_CANCEL_URL || ''
        }
      } else {
        payloadCreateCheckoutSubscription = {
          customer_email: session?.user?.email || '',
          payment_method_types: ['card'],
          billing_address_collection: 'required',
          line_items: [
            {
              price: 'price_1LnPEoAhlNoLCPMM7EIKeuFm', quantity: 1
            }
          ],
          mode: 'subscription',
          allow_promotion_codes: true,
          success_url: process.env.STRIPE_SUCCESS_URL || '',
          cancel_url: process.env.STRIPE_CANCEL_URL || ''
        }
      }

      const stripeCheckoutSession = await stripe?.checkout.sessions.create(payloadCreateCheckoutSubscription)
      return res.status(200).json({ sessionId: stripeCheckoutSession.id })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}
