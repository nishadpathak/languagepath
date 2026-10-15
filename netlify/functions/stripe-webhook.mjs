// POST /.netlify/functions/stripe-webhook — Stripe sends checkout.session.completed here.
// Verifies the signature on the RAW body, then writes the license key onto the PaymentIntent / Subscription
// metadata (so it is visible in the Stripe dashboard and recoverable). Idempotent: the key is derived from the
// session, so retries produce the same key. The buyer gets the key on /pro-success.html (session_id lookup).
import { verifyWebhook, stripe } from "./lib/stripe.mjs";
import { licenseForSession } from "./lib/fulfil.mjs";
export default async function handler(req) {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  const raw = await req.text();
  if (!verifyWebhook(raw, req.headers.get("stripe-signature"), process.env.STRIPE_WEBHOOK_SECRET)) return new Response("bad signature", { status: 400 });
  let evt; try { evt = JSON.parse(raw); } catch (e) { return new Response("bad json", { status: 400 }); }
  if (evt.type !== "checkout.session.completed" && evt.type !== "checkout.session.async_payment_succeeded") return Response.json({ received: true, ignored: evt.type });
  const s = evt.data && evt.data.object;
  try {
    const r = await licenseForSession(s.id);
    if (r.error) return Response.json({ received: true, skipped: r.error });   // e.g. async payment still pending
    const meta = { metadata: { lp_license: r.license, lp_skus: r.payload.skus.join(",") } };
    if (s.subscription) await stripe("POST", "/subscriptions/" + encodeURIComponent(s.subscription), meta, { idempotencyKey: "lp-lic-sub-" + s.id });
    else if (s.payment_intent) await stripe("POST", "/payment_intents/" + encodeURIComponent(s.payment_intent), meta, { idempotencyKey: "lp-lic-pi-" + s.id });
    return Response.json({ received: true });
  } catch (e) {
    console.error("[stripe-webhook]", evt.id, e.message);       // never log secrets or the license
    return new Response("temporary error", { status: 500 });  // Stripe retries
  }
}
