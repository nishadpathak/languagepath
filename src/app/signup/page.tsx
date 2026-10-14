"use client";

import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function SignupForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/account";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const body = (await response.json()) as { error?: string };
    if (!response.ok) {
      setError(body.error || "Could not create the account.");
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="font-serif text-4xl">Create an account</h1>
      <p className="text-[var(--muted)]">
        Still optional. Create one when you want Pro sync or the larger chat quota.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          className="w-full rounded-2xl border border-[var(--rule)] bg-white px-4 py-3"
        />
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
          minLength={8}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password (8+ characters)"
          className="w-full rounded-2xl border border-[var(--rule)] bg-white px-4 py-3"
        />
        {error ? <p className="text-sm text-[var(--terracotta)]">{error}</p> : null}
        <button
          type="submit"
          className="w-full rounded-full bg-[var(--ink)] py-3 text-sm text-[var(--paper)]"
        >
          Create account
        </button>
      </form>
      <p className="text-sm">
        Already have one? <Link href={`/login?next=${encodeURIComponent(next)}`}>Log in</Link>
      </p>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}
