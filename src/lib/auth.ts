import { compare, hash } from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const COOKIE = "lp_session";

type SessionPayload = {
  sub: string;
  email: string;
};

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value) {
    throw new Error("AUTH_SECRET is not set");
  }
  return new TextEncoder().encode(value);
}

export async function hashPassword(password: string) {
  return hash(password, 12);
}

export async function verifyPassword(password: string, passwordHash: string) {
  return compare(password, passwordHash);
}

export async function createSession(payload: SessionPayload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret());

  const store = await cookies();
  store.set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearSession() {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function readSession(): Promise<SessionPayload | null> {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    if (typeof payload.sub !== "string" || typeof payload.email !== "string") {
      return null;
    }
    return { sub: payload.sub, email: payload.email };
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const session = await readSession();
  if (!session) return null;
  return prisma.user.findUnique({ where: { id: session.sub } });
}

export function publicUser(user: NonNullable<Awaited<ReturnType<typeof getCurrentUser>>>) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    plan: user.plan,
    planInterval: user.planInterval,
    planStatus: user.planStatus,
    currentPeriodEnd: user.currentPeriodEnd,
    intensiveMode: user.intensiveMode,
    aiMessagesUsed: user.aiMessagesUsed,
    aiQuotaResetAt: user.aiQuotaResetAt,
    streakCount: user.streakCount,
    lastStreakDate: user.lastStreakDate,
    xp: user.xp,
    sentencesBuilt: user.sentencesBuilt,
    sentencesSpoken: user.sentencesSpoken,
    hasStripeCustomer: Boolean(user.stripeCustomerId),
  };
}
