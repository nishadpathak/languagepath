import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getCurrentUser } from "@/lib/auth";
import { checkoutCompletedEvent, handleStripeEvent } from "@/lib/billing";
import { isPro } from "@/lib/quota";
import { prisma } from "@/lib/prisma";
import { webhookMockAllowed } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ enabled: webhookMockAllowed() });
}

export async function POST(request: Request) {
  if (!webhookMockAllowed()) {
    return NextResponse.json(
      { error: "Webhook mock is off. Set ALLOW_WEBHOOK_MOCK=1 in local .env (never production)." },
      { status: 404 },
    );
  }

  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Log in first." }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as { interval?: string };
  const interval = body.interval === "year" ? "year" : "month";
  const event = checkoutCompletedEvent({
    userId: user.id,
    interval,
    eventId: `evt_mock_${user.id}_${Date.now()}`,
  });

  await handleStripeEvent(event as unknown as Stripe.Event);
  const updated = await prisma.user.findUniqueOrThrow({ where: { id: user.id } });
  return NextResponse.json({
    ok: true,
    pro: isPro(updated),
    plan: updated.plan,
    planInterval: updated.planInterval,
    planStatus: updated.planStatus,
  });
}
