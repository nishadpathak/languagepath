import { NextResponse } from "next/server";
import { stripeConfigured } from "@/lib/stripe";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    stripe: stripeConfigured(),
  });
}
