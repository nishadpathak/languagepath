import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key.includes("...")) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  if (!stripeClient) {
    stripeClient = new Stripe(key);
  }
  return stripeClient;
}

export function stripeConfigured() {
  const secret = process.env.STRIPE_SECRET_KEY;
  const monthly = process.env.STRIPE_PRICE_MONTHLY;
  const yearly = process.env.STRIPE_PRICE_YEARLY;
  return Boolean(
    secret &&
      !secret.includes("...") &&
      monthly &&
      monthly.startsWith("price_") &&
      yearly &&
      yearly.startsWith("price_"),
  );
}

export function appUrl() {
  return (process.env.APP_URL || "http://localhost:3000").replace(/\/$/, "");
}

export function webhookSecretConfigured() {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  return Boolean(secret && !secret.includes("..."));
}

export function webhookMockAllowed() {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.ALLOW_WEBHOOK_MOCK === "1"
  );
}

export function verifyWebhookEvent(payload: string, signature: string) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret || secret.includes("...")) {
    throw new Error("STRIPE_WEBHOOK_SECRET is not set.");
  }
  // Signature check only needs the webhook secret. A dummy key is enough when
  // Checkout prices are not configured yet.
  const stripe = stripeConfigured()
    ? getStripe()
    : new Stripe("sk_test_webhook_verify_only");
  return stripe.webhooks.constructEvent(payload, signature, secret);
}
