import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { parseProgress } from "@/lib/progress";
import { isPro } from "@/lib/quota";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Log in first." }, { status: 401 });
  if (!isPro(user)) {
    return NextResponse.json(
      { error: "Cloud sync is a Pro feature. Lessons stay free either way." },
      { status: 403 },
    );
  }
  return NextResponse.json({
    progress: parseProgress(JSON.parse(user.progressJson || "{}")),
  });
}

export async function PUT(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Log in first." }, { status: 401 });
  if (!isPro(user)) {
    return NextResponse.json(
      { error: "Cloud sync is a Pro feature." },
      { status: 403 },
    );
  }
  const body = (await request.json()) as { progress?: unknown };
  const progress = parseProgress(body.progress);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      progressJson: JSON.stringify(progress),
      intensiveMode: progress.intensiveMode,
      streakCount: progress.streakCount,
      lastStreakDate: progress.lastStreakDate,
      xp: progress.xp,
      sentencesBuilt: progress.sentencesBuilt,
      sentencesSpoken: progress.sentencesSpoken,
      pathCityIndex: progress.pathCityIndex,
      pathDaysRemaining: progress.pathDaysRemaining,
      pathMisses: progress.pathMisses,
    },
  });
  return NextResponse.json({ ok: true, progress });
}
