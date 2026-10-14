import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { remainingMessages, sameUtcMonth } from "@/lib/quota";
import { getCourse } from "@/data/courses";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = { role: "user" | "assistant"; content: string };

function localTutor(courseId: string, messages: ChatMessage[]) {
  const course = getCourse(courseId) ?? getCourse("es")!;
  const last = messages.filter((message) => message.role === "user").at(-1)?.content ?? "";
  const samples: Record<string, string> = {
    es: "Quiero café, por favor.",
    fr: "Je voudrais un café, s’il vous plaît.",
    de: "Ich möchte einen Kaffee, bitte.",
    pt: "Quero um café, por favor.",
  };
  const sample = samples[course.id] ?? samples.es;
  if (!last.trim()) {
    return `Try building one sentence in ${course.language}. Example: ${sample}`;
  }
  if (last.length < 8) {
    return `A bit short. Stretch it with a piece you already have. In ${course.language} you could try: ${sample}`;
  }
  return `Good — keep it in ${course.language}. I would answer simply: “${sample}” Then rebuild it from the pieces, out loud.`;
}

async function openAiTutor(courseId: string, messages: ChatMessage[]) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return localTutor(courseId, messages);
  const course = getCourse(courseId) ?? getCourse("es")!;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content: `You are a beginner conversation partner for ${course.language}. Stay inside A1–A2. Prefer short replies. If the learner uses English, ask them to try ${course.language} and offer one model sentence. Gently correct by restating, not by lecturing.`,
        },
        ...messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
      ],
    }),
  });
  if (!response.ok) return localTutor(courseId, messages);
  const body = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  return body.choices?.[0]?.message?.content?.trim() || localTutor(courseId, messages);
}

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ remaining: 0, signedIn: false });
  }
  return NextResponse.json({
    remaining: remainingMessages({
      used: user.aiMessagesUsed,
      resetAt: user.aiQuotaResetAt,
      snapshot: user,
    }),
    signedIn: true,
  });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      {
        error: "Log in for the conversation partner. Lessons stay free without an account.",
        remaining: 0,
      },
      { status: 401 },
    );
  }
  const remaining = remainingMessages({
    used: user.aiMessagesUsed,
    resetAt: user.aiQuotaResetAt,
    snapshot: user,
  });
  if (remaining <= 0) {
    return NextResponse.json(
      {
        error:
          "This month’s chat quota is used up. Pro raises it; lessons stay free.",
        remaining: 0,
      },
      { status: 402 },
    );
  }

  const body = (await request.json()) as {
    courseId?: string;
    messages?: ChatMessage[];
  };
  const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
  const reply = await openAiTutor(body.courseId || "es", messages);

  if (user) {
    const now = new Date();
    const reset = !user.aiQuotaResetAt || !sameUtcMonth(user.aiQuotaResetAt, now);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        aiMessagesUsed: reset ? 1 : user.aiMessagesUsed + 1,
        aiQuotaResetAt: reset ? now : user.aiQuotaResetAt,
      },
    });
  }

  return NextResponse.json({
    reply,
    remaining: remaining - 1,
  });
}
