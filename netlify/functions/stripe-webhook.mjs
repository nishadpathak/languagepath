// POST /.netlify/functions/stripe-webhook — verified Stripe events -> licence records in Netlify Blobs.
// Handles checkout.session.completed / async_payment_succeeded (mint), invoice.paid (extend Pro),
// customer.subscription.deleted (end Pro). Needs STRIPE_WEBHOOK_SECRET + LICENSE_SECRET only (no API key).
import { verifyWebhook } from "./lib/stripe.mjs";
import { onCheckout, onInvoicePaid, onSubscriptionDeleted } from "./lib/fulfil.mjs";
export default async function handler(req) {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  const raw = await req.text();
  if (!verifyWebhook(raw, req.headers.get("stripe-signature"), process.env.STRIPE_WEBHOOK_SECRET)) return new Response("bad signature", { status: 400 });
  let evt; try { evt = JSON.parse(raw); } catch (e) { return new Response("bad json", { status: 400 }); }
  const o = evt.data && evt.data.object;
  try {
    let r = { ignored: evt.type };
    if (evt.type === "checkout.session.completed" || evt.type === "checkout.session.async_payment_succeeded") r = await onCheckout(o);
    else if (evt.type === "invoice.paid") r = await onInvoicePaid(o);
    else if (evt.type === "customer.subscription.deleted") r = await onSubscriptionDeleted(o);
    return Response.json({ received: true, ...r });
  } catch (e) {
    console.error("[stripe-webhook]", evt.id, evt.type, e.message);   // never log secrets or licences
    return new Response("temporary error", { status: 500 });          // Stripe retries
  }
}
