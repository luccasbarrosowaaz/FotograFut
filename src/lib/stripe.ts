import { loadStripe } from '@stripe/stripe-js';

const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

if (!stripePublicKey) {
  throw new Error('Stripe Public Key é necessária.');
}

export const stripe = loadStripe(stripePublicKey);