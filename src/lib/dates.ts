export function todayKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function shiftDayKey(date: Date, deltaDays: number): string {
  const next = new Date(date);
  next.setDate(next.getDate() + deltaDays);
  return todayKey(next);
}

export function laterDate(
  a: string | null | undefined,
  b: string | null | undefined,
): string | null {
  if (!a) return b ?? null;
  if (!b) return a;
  return a >= b ? a : b;
}
