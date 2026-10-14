"use client";

import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/account";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const body = (await response.json()) as { error?: string };
    if (!response.ok) {
      setError(body.error || "Could not log in.");
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="font-serif text-4xl">Log in</h1>
      <p className="text-[var(--muted)]">
        Optional. Free lessons work without an account. You need one only for
        Stripe Pro and cloud backup.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-[var(--rule)] bg-white px-4 py-3"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="w-full rounded-2xl border border-[var(--rule)] bg-white px-4 py-3"
        />
        {error ? <p className="text-sm text-[var(--terracotta)]">{error}</p> : null}
        <button
          type="submit"
          className="w-full rounded-full bg-[var(--ink)] py-3 text-sm text-[var(--paper)]"
        >
          Log in
        </button>
      </form>
      <p className="text-sm">
        No account? <Link href={`/signup?next=${encodeURIComponent(next)}`}>Create one</Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
