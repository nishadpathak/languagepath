import { hash } from "bcryptjs";
import type Stripe from "stripe";
import { handleStripeEvent } from "../src/lib/billing.ts";
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

  const event = {
    id: `evt_${Date.now()}`,
    type: "checkout.session.completed",
    data: {
      object: {
        object: "checkout.session",
        client_reference_id: user.id,
        customer: "cus_test_123",
        metadata: { userId: user.id },
        subscription: {
          id: "sub_test_123",
          status: "active",
          customer: "cus_test_123",
          items: {
            data: [
              {
                current_period_end: 1_800_000_000,
                price: { id: "price_year", recurring: { interval: "year" } },
              },
            ],
          },
        },
      },
    },
  } as unknown as Stripe.Event;

  const first = await handleStripeEvent(event);
  const second = await handleStripeEvent(event);
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
