import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";

export const ACTIVE_STATUSES = new Set(["active", "trialing"]);

export type BillingPatch = {
  stripeCustomerId?: string;
  stripeSubscriptionId?: string | null;
  plan: "free" | "pro";
  planInterval: "month" | "year" | null;
  planStatus: string | null;
  currentPeriodEnd: Date | null;
};

type PriceLike = {
  id?: string | null;
  recurring?: { interval?: string | null } | null;
};

type SubscriptionLike = {
  id: string;
  status: string;
  customer?: string | { id: string } | null;
  metadata?: Record<string, string> | null;
  items?: {
    data?: Array<{
      current_period_end?: number | null;
      price?: PriceLike | null;
    }>;
  } | null;
};

type CheckoutLike = {
  id?: string;
  client_reference_id?: string | null;
  customer?: string | { id: string } | null;
  subscription?: string | SubscriptionLike | null;
  metadata?: Record<string, string> | null;
};

export function customerIdOf(
  value: string | { id: string } | null | undefined,
): string | null {
  if (!value) return null;
  return typeof value === "string" ? value : value.id;
}

export function resolveCheckoutUserId(session: CheckoutLike): string | null {
  return session.client_reference_id || session.metadata?.userId || null;
}

export function planFromSubscription(subscription: SubscriptionLike): BillingPatch {
  const item = subscription.items?.data?.[0];
  const intervalRaw = item?.price?.recurring?.interval;
  const interval =
    intervalRaw === "year" || intervalRaw === "month" ? intervalRaw : null;
  const periodEnd = item?.current_period_end
    ? new Date(item.current_period_end * 1000)
    : null;
  const pro = ACTIVE_STATUSES.has(subscription.status);
  return {
    stripeCustomerId: customerIdOf(subscription.customer) ?? undefined,
    stripeSubscriptionId: subscription.id,
    plan: pro ? "pro" : "free",
    planInterval: interval,
    planStatus: subscription.status,
    currentPeriodEnd: periodEnd,
  };
}

export function billingPatchFromEvent(event: {
  type: string;
  data: { object: unknown };
}): { userId?: string | null; customerId?: string | null; patch: BillingPatch } | null {
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as CheckoutLike;
    if (!session.subscription) return null;
    const nested =
      typeof session.subscription === "string"
        ? null
        : planFromSubscription(session.subscription);
    return {
      userId: resolveCheckoutUserId(session),
      customerId: customerIdOf(session.customer),
      patch: nested ?? {
        stripeCustomerId: customerIdOf(session.customer) ?? undefined,
        stripeSubscriptionId:
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription.id,
        plan: "pro",
        planInterval: null,
        planStatus: "active",
        currentPeriodEnd: null,
      },
    };
  }

  if (
    event.type === "customer.subscription.created" ||
    event.type === "customer.subscription.updated" ||
    event.type === "customer.subscription.deleted"
  ) {
    const subscription = event.data.object as SubscriptionLike;
    const patch = planFromSubscription(subscription);
    if (event.type === "customer.subscription.deleted") {
      patch.plan = "free";
      patch.planStatus = "canceled";
    }
    return {
      userId: subscription.metadata?.userId ?? null,
      customerId: customerIdOf(subscription.customer),
      patch,
    };
  }

  return null;
}

async function findUser(userId?: string | null, customerId?: string | null) {
  if (userId) {
    const byId = await prisma.user.findUnique({ where: { id: userId } });
    if (byId) return byId;
  }
  if (customerId) {
    return prisma.user.findUnique({ where: { stripeCustomerId: customerId } });
  }
  return null;
}

export async function handleStripeEvent(event: Stripe.Event) {
  const existing = await prisma.webhookEvent.findUnique({
    where: { id: event.id },
  });
  if (existing) {
    return { duplicate: true as const };
  }

  const derived = billingPatchFromEvent(event);
  let userId: string | null = derived?.userId ?? null;

  if (derived) {
    const user = await findUser(derived.userId, derived.customerId);
    if (user) {
      userId = user.id;
      await prisma.user.update({
        where: { id: user.id },
        data: {
          stripeCustomerId:
            derived.patch.stripeCustomerId ?? user.stripeCustomerId,
          stripeSubscriptionId: derived.patch.stripeSubscriptionId,
          plan: derived.patch.plan,
          planInterval: derived.patch.planInterval,
          planStatus: derived.patch.planStatus,
          currentPeriodEnd: derived.patch.currentPeriodEnd,
        },
      });
    }
  }

  await prisma.webhookEvent.create({
    data: {
      id: event.id,
      type: event.type,
      payloadType:
        typeof event.data.object === "object" &&
        event.data.object &&
        "object" in event.data.object
          ? String((event.data.object as { object?: string }).object)
          : null,
      userId,
    },
  });

  return { duplicate: false as const, userId };
}
