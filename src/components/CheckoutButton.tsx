"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProgress } from "@/context/ProgressContext";

export function CheckoutButton({ interval }: { interval: "month" | "year" }) {
  const router = useRouter();
  const { me } = useProgress();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const label = interval === "month" ? "Start monthly Pro" : "Start yearly Pro";

  async function startCheckout() {
    setError(null);
    if (!me) {
      router.push("/login?next=/pricing");
      return;
    }
    setPending(true);
    const response = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interval }),
    });
    const body = (await response.json()) as { url?: string; error?: string };
    setPending(false);
    if (!response.ok || !body.url) {
      setError(body.error || "Checkout is not available yet.");
      return;
    }
    window.location.href = body.url;
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => void startCheckout()}
        disabled={pending}
        className="w-full rounded-full bg-[var(--ink)] px-4 py-3 text-sm text-[var(--paper)] disabled:opacity-60"
      >
        {pending ? "Redirecting to Stripe…" : label}
      </button>
      {error ? <p className="text-sm text-[var(--terracotta)]">{error}</p> : null}
    </div>
  );
}
