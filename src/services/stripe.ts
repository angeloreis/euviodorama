import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY || '', {
  apiVersion: '2022-08-01',
  appInfo: {
    name: 'EuViODoramaNews',
    version: '1.0.0'
}
});
