import { describe, expect, it } from "vitest";
import {
  billingPatchFromEvent,
  planFromSubscription,
  resolveCheckoutUserId,
} from "@/lib/billing";
import { isPro, remainingMessages } from "@/lib/quota";

describe("checkout to pro mapping", () => {
  it("reads the user id off Checkout and subscription metadata", () => {
    expect(
      resolveCheckoutUserId({
        client_reference_id: "user_1",
        metadata: { userId: "user_other" },
      }),
    ).toBe("user_1");
  });

  it("marks active monthly subscriptions as Pro", () => {
    const patch = planFromSubscription({
      id: "sub_123",
      status: "active",
      customer: "cus_123",
      items: {
        data: [
          {
            current_period_end: 1_800_000_000,
            price: { id: "price_month", recurring: { interval: "month" } },
          },
        ],
      },
    });
    expect(patch.plan).toBe("pro");
    expect(patch.planInterval).toBe("month");
    expect(isPro(patch)).toBe(true);
  });

  it("drops Pro when the subscription is deleted", () => {
    const derived = billingPatchFromEvent({
      type: "customer.subscription.deleted",
      data: {
        object: {
          id: "sub_123",
          status: "canceled",
          customer: "cus_123",
          metadata: { userId: "user_1" },
          items: { data: [] },
        },
      },
    });
    expect(derived?.patch.plan).toBe("free");
    expect(derived?.userId).toBe("user_1");
  });

  it("promotes from a Checkout session with a nested subscription", () => {
    const derived = billingPatchFromEvent({
      type: "checkout.session.completed",
      data: {
        object: {
          client_reference_id: "user_1",
          customer: "cus_123",
          metadata: { userId: "user_1" },
          subscription: {
            id: "sub_123",
            status: "active",
            customer: "cus_123",
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
    });
    expect(derived?.userId).toBe("user_1");
    expect(derived?.patch.plan).toBe("pro");
    expect(derived?.patch.planInterval).toBe("year");
  });
});

describe("ai quota", () => {
  it("gives free accounts a small monthly taste and Pro a larger one", () => {
    const now = new Date("2026-04-10T00:00:00Z");
    expect(
      remainingMessages({
        used: 1,
        resetAt: now,
        snapshot: { plan: "free" },
        now,
      }),
    ).toBe(2);
    expect(
      remainingMessages({
        used: 10,
        resetAt: now,
        snapshot: { plan: "pro", planStatus: "active", planInterval: "month" },
        now,
      }),
    ).toBe(70);
    expect(
      remainingMessages({
        used: 10,
        resetAt: now,
        snapshot: { plan: "pro", planStatus: "active", planInterval: "year" },
        now,
      }),
    ).toBe(110);
  });
});
