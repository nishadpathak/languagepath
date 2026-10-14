import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--rule)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>LanguagePath · construct, say, reveal. Core lessons stay free.</p>
        <div className="flex gap-4">
          <Link href="/pricing">Pro</Link>
          <Link href="/learn">Courses</Link>
          <Link href="/chat">GrokBot</Link>
          <Link href="/path">Path race</Link>
        </div>
      </div>
    </footer>
  );
}
