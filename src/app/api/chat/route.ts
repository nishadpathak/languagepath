import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { remainingMessages, sameUtcMonth } from "@/lib/quota";
import { replyWithTutor, tutorProvider, type ChatMessage } from "@/lib/tutor";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ remaining: 0, signedIn: false, provider: tutorProvider() });
  }
  return NextResponse.json({
    remaining: remainingMessages({
      used: user.aiMessagesUsed,
      resetAt: user.aiQuotaResetAt,
      snapshot: user,
    }),
    signedIn: true,
    provider: tutorProvider(),
  });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      {
        error: "Log in for GrokBot. Lessons stay free without an account.",
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
          "This month’s GrokBot quota is used up. Pro raises it; lessons stay free.",
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
  const reply = await replyWithTutor(body.courseId || "es", messages);

  const now = new Date();
  const reset = !user.aiQuotaResetAt || !sameUtcMonth(user.aiQuotaResetAt, now);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      aiMessagesUsed: reset ? 1 : user.aiMessagesUsed + 1,
      aiQuotaResetAt: reset ? now : user.aiQuotaResetAt,
    },
  });

  return NextResponse.json({
    reply,
    remaining: remaining - 1,
    provider: tutorProvider(),
  });
}
