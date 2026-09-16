"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "@/context/ProgressContext";

const links = [
  { href: "/learn", label: "Learn" },
  { href: "/path", label: "Path" },
  { href: "/intensive", label: "Intensive" },
  { href: "/chat", label: "Chat" },
  { href: "/pricing", label: "Pro" },
];

export function Header() {
  const pathname = usePathname();
  const { progress, me, pro } = useProgress();

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--rule)] bg-[color:var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-serif text-xl tracking-tight text-[var(--ink)]">
          LanguagePath
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  active
                    ? "bg-[var(--ink)] text-[var(--paper)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <span className="hidden sm:inline text-[var(--muted)]">
            {progress.streakCount} day streak · {progress.xp} XP
          </span>
          <Link
            href={me ? "/account" : "/login"}
            className="rounded-full border border-[var(--rule)] px-3 py-1.5 hover:border-[var(--ink)]"
          >
            {me ? (pro ? "Pro account" : "Account") : "Log in"}
          </Link>
        </div>
      </div>
      <nav className="flex gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full border border-[var(--rule)] px-3 py-1 text-sm"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
