import { NextResponse } from "next/server";
import { getCurrentUser, publicUser } from "@/lib/auth";
import { isPro, remainingMessages } from "@/lib/quota";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ user: null });
  return NextResponse.json({
    user: {
      ...publicUser(user),
      pro: isPro(user),
      remainingMessages: remainingMessages({
        used: user.aiMessagesUsed,
        resetAt: user.aiQuotaResetAt,
        snapshot: user,
      }),
    },
  });
}
