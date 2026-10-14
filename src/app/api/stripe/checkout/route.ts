import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { appUrl, getStripe, stripeConfigured } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Log in before Checkout." }, { status: 401 });
  }
  if (!stripeConfigured()) {
    return NextResponse.json(
      {
        error:
          "Stripe keys and price IDs are not set. See README for Checkout and webhook setup.",
      },
      { status: 503 },
    );
  }

  const body = (await request.json()) as { interval?: string };
  const interval = body.interval === "year" ? "year" : "month";
  const price =
    interval === "year"
      ? process.env.STRIPE_PRICE_YEARLY
      : process.env.STRIPE_PRICE_MONTHLY;
  if (!price) {
    return NextResponse.json({ error: "Missing Stripe price ID." }, { status: 500 });
  }

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: user.stripeCustomerId ?? undefined,
    customer_email: user.stripeCustomerId ? undefined : user.email,
    client_reference_id: user.id,
    line_items: [{ price, quantity: 1 }],
    allow_promotion_codes: true,
    success_url: `${appUrl()}/account?checkout=success`,
    cancel_url: `${appUrl()}/pricing?checkout=canceled`,
    metadata: { userId: user.id, interval },
    subscription_data: {
      metadata: { userId: user.id, interval },
    },
  });

  if (session.customer && typeof session.customer === "string") {
    await prisma.user.update({
      where: { id: user.id },
      data: { stripeCustomerId: session.customer },
    });
  }

  return NextResponse.json({ url: session.url });
}
