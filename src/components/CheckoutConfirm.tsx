"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useProgress } from "@/context/ProgressContext";

function ConfirmInner() {
  const params = useSearchParams();
  const checkout = params.get("checkout") === "success";
  const { me, pro, refreshMe } = useProgress();
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!checkout || pro) return;
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      void refreshMe();
      if (attempts >= 15) {
        window.clearInterval(timer);
        setTimedOut(true);
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [checkout, pro, refreshMe]);

  if (!checkout) return null;

  return (
    <div className="rounded-2xl border border-[var(--forest)] bg-white p-4">
      {pro ? (
        <p>
          Webhook landed. {me?.email} is on Pro
          {me?.planInterval ? ` (${me.planInterval}ly)` : ""}. Cloud sync and
          the higher chat quota are on.
        </p>
      ) : (
        <p>
          {timedOut
            ? "Checkout finished, but Pro is not on this account yet. Confirm stripe listen is forwarding to /api/stripe/webhook."
            : "Checkout finished. Waiting for the Stripe webhook to mark this account Pro…"}
        </p>
      )}
    </div>
  );
}

export function CheckoutConfirm() {
  return (
    <Suspense>
      <ConfirmInner />
    </Suspense>
  );
}
