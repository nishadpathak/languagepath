import { hash } from "bcryptjs";
import { afterAll, describe, expect, it } from "vitest";
import type Stripe from "stripe";
import { checkoutCompletedEvent, handleStripeEvent } from "@/lib/billing";
import { isPro } from "@/lib/quota";
import { prisma } from "@/lib/prisma";

describe("webhook mock → Pro flag", () => {
  const email = `pro-sync-${Date.now()}@languagepath.test`;

  afterAll(async () => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      await prisma.webhookEvent.deleteMany({ where: { userId: user.id } });
    }
    await prisma.user.deleteMany({ where: { email } });
    await prisma.$disconnect();
  });

  it("marks the account Pro and unlocks cloud sync fields", async () => {
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: await hash("languagepath", 12),
        name: "Pro sync",
        aiMessagesUsed: 3,
      },
    });

    const event = checkoutCompletedEvent({
      userId: user.id,
      interval: "month",
      eventId: `evt_test_${user.id}`,
    });
    const first = await handleStripeEvent(event as unknown as Stripe.Event);
    const second = await handleStripeEvent(event as unknown as Stripe.Event);
    const updated = await prisma.user.findUniqueOrThrow({ where: { id: user.id } });

    expect(first.duplicate).toBe(false);
    expect(second.duplicate).toBe(true);
    expect(updated.plan).toBe("pro");
    expect(updated.planStatus).toBe("active");
    expect(updated.planInterval).toBe("month");
    expect(isPro(updated)).toBe(true);
    expect(updated.aiMessagesUsed).toBe(0);
    expect(updated.stripeCustomerId).toBeTruthy();
  });
});
