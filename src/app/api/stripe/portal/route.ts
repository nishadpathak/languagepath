import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { appUrl, getStripe, stripeConfigured } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST() {
  const user = await getCurrentUser();
  if (!user?.stripeCustomerId) {
    return NextResponse.json(
      { error: "No Stripe customer on this account yet." },
      { status: 400 },
    );
  }
  if (!stripeConfigured()) {
    return NextResponse.json({ error: "Stripe is not configured." }, { status: 503 });
  }
  const portal = await getStripe().billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: `${appUrl()}/account`,
  });
  return NextResponse.json({ url: portal.url });
}
