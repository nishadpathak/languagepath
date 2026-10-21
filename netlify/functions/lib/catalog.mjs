// LanguagePath Pro + Travel Phrase Pack catalogue (single source of truth for server + tools/setup-stripe.js).
// Prices are in USD cents. Stripe prices are found by lookup_key = "lp_" + sku, so this file never holds Stripe IDs.
export const CITIES = [
  ["uae", "dubai", "Dubai", "Arabic"], ["uae", "abu-dhabi", "Abu Dhabi", "Arabic"],
  ["turkey", "istanbul", "Istanbul", "Turkish"], ["portugal", "lisbon", "Lisbon", "Portuguese"],
  ["spain", "madrid", "Madrid", "Spanish"], ["spain", "barcelona", "Barcelona", "Spanish"],
  ["china", "beijing", "Beijing", "Mandarin"], ["china", "shanghai", "Shanghai", "Mandarin"]
];
export const EXTRA_PACKS = { "business-kit": "Business Travel Kit" }; // non-city PDFs in private/packs
export const PACK_IDS = [...CITIES.map(c => c[1]), ...Object.keys(EXTRA_PACKS)];
export const PACK_FILE = c => `${c}.pdf`; // private/packs/<city>.pdf (never in the public dist)
export const SKUS = {
  pro_monthly: { kind: "pro", name: "LanguagePath Pro (monthly)", amount: 499, recurring: "month" },
  pro_yearly: { kind: "pro", name: "LanguagePath Pro (yearly)", amount: 2900, recurring: "year" },
  tef_grader_monthly: { kind: "tef", name: "LanguagePath TEF/TCF Practice Grader (monthly)", amount: 2900, recurring: "month" },
  pack_bundle: { kind: "pack", name: "Travel Phrase Pack bundle (all 8 cities)", amount: 1900, packs: CITIES.map(c => c[1]) },
  pack_business_kit: { kind: "pack", name: "Business Travel Kit (Gulf Arabic, Mandarin, Hindi; PDF)", amount: 1900, packs: ["business-kit"] },
  ...Object.fromEntries(CITIES.map(([, slug, city, lang]) => ["pack_" + slug.replace(/-/g, "_"), { kind: "pack", name: `${city} Travel Phrase Pack (${lang}, PDF)`, amount: 900, packs: [slug] }]))
};
export const LOOKUP = sku => "lp_" + sku;
export const skuFromLookup = lk => (lk && lk.startsWith("lp_") && SKUS[lk.slice(3)]) ? lk.slice(3) : null;
