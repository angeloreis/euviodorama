import { loadStripe, Stripe } from '@stripe/stripe-js'

export async function getStripeJs(): Promise<Stripe|null> {
  const stripeJS = await loadStripe(process.env.STRIPE_PUBLIC_KEY || '')
  return stripeJS
}
