import { hash } from "bcryptjs";
import type Stripe from "stripe";
import { checkoutCompletedEvent, handleStripeEvent } from "../src/lib/billing.ts";
import { prisma } from "../src/lib/prisma.ts";

async function main() {
  const email = `pro-${Date.now()}@languagepath.test`;
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash: await hash("languagepath", 12),
      name: "Webhook tester",
    },
  });

  const event = checkoutCompletedEvent({
    userId: user.id,
    interval: "year",
    eventId: `evt_${Date.now()}`,
  });
  const first = await handleStripeEvent(event as unknown as Stripe.Event);
  const second = await handleStripeEvent(event as unknown as Stripe.Event);
  const updated = await prisma.user.findUniqueOrThrow({ where: { id: user.id } });
  console.log(
    JSON.stringify(
      {
        first,
        second,
        plan: updated.plan,
        interval: updated.planInterval,
        status: updated.planStatus,
        customer: updated.stripeCustomerId,
      },
      null,
      2,
    ),
  );
  await prisma.$disconnect();
}

main().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
