"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProgressProvider } from "@/context/ProgressContext";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>
      <Footer />
    </ProgressProvider>
  );
}
