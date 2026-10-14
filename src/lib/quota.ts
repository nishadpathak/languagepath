export const FREE_AI_QUOTA = 3;
export const PRO_MONTHLY_AI_QUOTA = 80;
export const PRO_YEARLY_AI_QUOTA = 120;

export type PlanSnapshot = {
  plan: string;
  planStatus?: string | null;
  planInterval?: string | null;
};

export function isPro(snapshot: PlanSnapshot | null | undefined): boolean {
  if (!snapshot) return false;
  const active =
    snapshot.planStatus === "active" || snapshot.planStatus === "trialing";
  return snapshot.plan === "pro" && active;
}

export function monthlyQuota(snapshot: PlanSnapshot | null | undefined): number {
  if (!isPro(snapshot)) return FREE_AI_QUOTA;
  return snapshot?.planInterval === "year"
    ? PRO_YEARLY_AI_QUOTA
    : PRO_MONTHLY_AI_QUOTA;
}

export function sameUtcMonth(a: Date, b: Date): boolean {
  return (
    a.getUTCFullYear() === b.getUTCFullYear() &&
    a.getUTCMonth() === b.getUTCMonth()
  );
}

export function remainingMessages(options: {
  used: number;
  resetAt: Date | null | undefined;
  snapshot: PlanSnapshot | null | undefined;
  now?: Date;
}): number {
  const now = options.now ?? new Date();
  const used =
    options.resetAt && sameUtcMonth(options.resetAt, now) ? options.used : 0;
  return Math.max(0, monthlyQuota(options.snapshot) - used);
}
