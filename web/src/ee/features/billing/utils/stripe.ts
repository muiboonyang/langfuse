import {env} from "@/src/env.mjs";
import Stripe from "@/src/ee/features/billing/utils/stripe";

export const stripeClient = env.STRIPE_SECRET_KEY
    ? new Stripe(env.STRIPE_SECRET_KEY)
    : undefined;
