import { addDoc, collection, doc, getDocs, query, Timestamp, updateDoc, where } from 'firebase/firestore/lite'
import { db } from 'utils/firebase'

import { stripe } from '../../../services/stripe'

export async function saveSubscription(
    subscriptionId: string,
     customerId: string,
     createAction = false
) {

  const userRef = collection(db, 'users')
    const q = query(userRef, where('id', '==', customerId))
    const userSnapshot = await getDocs(q)

    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    const userOfSub = userSnapshot.docs.map(user => { return { id: user.id, ...user.data() } })

    const subscriptionData = {
          price_id: subscription.items.data[0].price.id,
          userId: userOfSub[0].id,
          created_at: Timestamp.now(),
          expired: false,
          newSub: true,
          paidStatus: 'create_sub',
          subSince: Timestamp.now()
    }

    if (createAction) {
      const subscriptionRef = collection(db, 'subscriptions')
      const docSubRef = await addDoc(subscriptionRef, subscriptionData)
      return docSubRef.id
    } else {
      const subRef = doc(db,'subscriptions', userOfSub[0].id)

      await updateDoc(subRef, subscriptionData)
    }



}
