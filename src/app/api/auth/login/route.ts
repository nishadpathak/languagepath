import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createSession, verifyPassword } from "@/lib/auth";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  const body = schema.safeParse(await request.json());
  if (!body.success) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: { email: body.data.email.toLowerCase().trim() },
  });
  if (!user || !(await verifyPassword(body.data.password, user.passwordHash))) {
    return NextResponse.json({ error: "Those credentials do not match." }, { status: 401 });
  }
  await createSession({ sub: user.id, email: user.email });
  return NextResponse.json({ ok: true });
}
