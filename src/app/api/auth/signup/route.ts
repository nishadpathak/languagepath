import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createSession, hashPassword } from "@/lib/auth";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().max(80).optional(),
});

export async function POST(request: Request) {
  const body = schema.safeParse(await request.json());
  if (!body.success) {
    return NextResponse.json({ error: "Enter a valid email and an 8+ character password." }, { status: 400 });
  }
  const email = body.data.email.toLowerCase().trim();
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "That email already has an account." }, { status: 409 });
  }
  const user = await prisma.user.create({
    data: {
      email,
      name: body.data.name?.trim() || null,
      passwordHash: await hashPassword(body.data.password),
    },
  });
  await createSession({ sub: user.id, email: user.email });
  return NextResponse.json({ ok: true });
}
