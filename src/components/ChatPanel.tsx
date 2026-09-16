"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@/context/ProgressContext";

type Message = { role: "user" | "assistant"; content: string };

export function ChatPanel() {
  const { progress, me, pro } = useProgress();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Stay at beginner level. Try a sentence with the pieces you already built. I will answer simply and nudge, not lecture.",
    },
  ]);
  const [input, setInput] = useState("");
  const [remaining, setRemaining] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    void fetch("/api/chat")
      .then((response) => response.json())
      .then((body: { remaining?: number }) => {
        if (typeof body.remaining === "number") setRemaining(body.remaining);
      })
      .catch(() => undefined);
  }, [me]);

  async function send() {
    const content = input.trim();
    if (!content) return;
    setInput("");
    setError(null);
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setPending(true);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseId: progress.lastCourseId,
        messages: next,
      }),
    });
    const body = (await response.json()) as {
      reply?: string;
      remaining?: number;
      error?: string;
    };
    setPending(false);
    if (!response.ok) {
      setError(body.error || "The partner is unavailable.");
      return;
    }
    if (typeof body.remaining === "number") setRemaining(body.remaining);
    if (body.reply) {
      setMessages([...next, { role: "assistant", content: body.reply }]);
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          Conversation partner
        </p>
        <h1 className="font-serif text-4xl">Talk with what you built</h1>
        <p className="mt-2 text-[var(--muted)]">
          Free accounts get a small monthly taste. Pro backs up your streak and
          raises the chat quota. Lessons are never gated.
        </p>
      </div>
      <p className="text-sm">
        {remaining === null
          ? "Checking quota…"
          : `${remaining} messages left this month`}
        {pro ? " · Pro" : " · Free taste"}
        {!me ? " · log in to chat" : ""}
      </p>
      <div className="space-y-3 rounded-[2rem] border border-[var(--rule)] bg-white/70 p-5">
        {messages.map((message, index) => (
          <p
            key={`${message.role}-${index}`}
            className={message.role === "user" ? "text-right" : "text-left"}
          >
            <span
              className={`inline-block max-w-[90%] rounded-2xl px-4 py-2 ${
                message.role === "user"
                  ? "bg-[var(--ink)] text-[var(--paper)]"
                  : "bg-[var(--paper)]"
              }`}
            >
              {message.content}
            </span>
          </p>
        ))}
      </div>
      {error ? <p className="text-sm text-[var(--terracotta)]">{error}</p> : null}
      <form
        className="flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          void send();
        }}
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Type a sentence you can actually build…"
          className="flex-1 rounded-full border border-[var(--rule)] bg-white px-4 py-3"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-[var(--terracotta)] px-5 py-3 text-sm text-white disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  );
}
