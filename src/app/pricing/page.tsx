import { CheckoutButton } from "@/components/CheckoutButton";

export default function PricingPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Pro</p>
        <h1 className="font-serif text-5xl">Keep the core free. Back up the rest.</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Lessons, Path, Intensive, streak, and XP work in the browser with no
          account. Pro is optional: Stripe Checkout, a webhook that marks you
          Pro, then cloud sync, streak backup, and a larger AI chat quota.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-[var(--rule)] bg-white/70 p-6">
          <p className="text-sm text-[var(--muted)]">Monthly</p>
          <p className="font-serif text-5xl">$9</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li>Cloud sync of progress</li>
            <li>Streak backup across devices</li>
            <li>80 AI chat messages / month</li>
            <li>Lessons stay free either way</li>
          </ul>
          <div className="mt-6">
            <CheckoutButton interval="month" />
          </div>
        </article>
        <article className="rounded-[2rem] border border-[var(--ink)] bg-white p-6">
          <p className="text-sm text-[var(--muted)]">Yearly · two months free</p>
          <p className="font-serif text-5xl">$72</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li>Same sync and streak backup</li>
            <li>120 AI chat messages / month</li>
            <li>Customer portal to cancel or switch</li>
            <li>No hard paywall on any lesson</li>
          </ul>
          <div className="mt-6">
            <CheckoutButton interval="year" />
          </div>
        </article>
      </div>
    </div>
  );
}
