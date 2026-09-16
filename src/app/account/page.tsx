"use client";

import { CheckoutConfirm } from "@/components/CheckoutConfirm";
import { IntensiveToggle } from "@/components/IntensiveToggle";
import { useProgress } from "@/context/ProgressContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();
  const { me, progress, pro } = useProgress();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  async function portal() {
    const response = await fetch("/api/stripe/portal", { method: "POST" });
    const body = (await response.json()) as { url?: string; error?: string };
    if (body.url) window.location.href = body.url;
    else alert(body.error || "Billing portal is not configured.");
  }

  if (!me) {
    return (
      <div className="space-y-4">
        <h1 className="font-serif text-4xl">No account needed</h1>
        <p className="max-w-xl text-[var(--muted)]">
          Your streak, XP, Intensive toggle, and Path clock already live in this
          browser. Log in only if you want Stripe Pro, cloud sync, or chat quota
          that follows you.
        </p>
        <p>
          {progress.streakCount} day streak · {progress.xp} XP ·{" "}
          {progress.sentencesBuilt} sentences built
        </p>
        <IntensiveToggle />
        <div className="flex gap-3">
          <Link href="/login" className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm text-[var(--paper)]">
            Log in
          </Link>
          <Link href="/signup" className="rounded-full border border-[var(--ink)] px-4 py-2 text-sm">
            Create account
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          {pro ? "Pro" : "Free account"}
        </p>
        <h1 className="font-serif text-4xl">{me.name || me.email}</h1>
        <p className="text-[var(--muted)]">{me.email}</p>
      </div>
      <CheckoutConfirm />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[var(--rule)] bg-white/70 p-4">
          <p className="text-sm text-[var(--muted)]">Streak</p>
          <p className="font-serif text-4xl">{progress.streakCount}</p>
        </div>
        <div className="rounded-2xl border border-[var(--rule)] bg-white/70 p-4">
          <p className="text-sm text-[var(--muted)]">XP</p>
          <p className="font-serif text-4xl">{progress.xp}</p>
        </div>
        <div className="rounded-2xl border border-[var(--rule)] bg-white/70 p-4">
          <p className="text-sm text-[var(--muted)]">Built / spoken</p>
          <p className="font-serif text-4xl">
            {progress.sentencesBuilt}/{progress.sentencesSpoken}
          </p>
        </div>
      </div>
      <IntensiveToggle />
      <p className="text-sm text-[var(--muted)]">
        {pro
          ? "Cloud sync is on. Progress and streak backup to this account."
          : "You are logged in, but sync stays local until a Checkout webhook marks you Pro."}
      </p>
      <div className="flex flex-wrap gap-3">
        {pro ? (
          <button
            type="button"
            onClick={() => void portal()}
            className="rounded-full border border-[var(--ink)] px-4 py-2 text-sm"
          >
            Manage billing
          </button>
        ) : (
          <Link href="/pricing" className="rounded-full bg-[var(--terracotta)] px-4 py-2 text-sm text-white">
            Upgrade with Stripe
          </Link>
        )}
        <button type="button" onClick={() => void logout()} className="text-sm underline">
          Log out
        </button>
      </div>
    </div>
  );
}
