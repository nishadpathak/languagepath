/* Peninsular (Castilian) pronunciation for Spain destinations (Madrid, Barcelona).
   The Spanish course itself is pan-Hispanic (seseo: z / c+e,i = "s"). Travel pages and phrase packs for
   Spain use distinción instead (z / c+e,i = "th"), matching the city notes in tools/guides.js.
   Keyed by the exact Spanish text; tools/check-castilian.js fails the build if a Spain-facing row with
   z / ce / ci is missing here. Some rows also swap to the usual Spain wording. */
"use strict";
const ES_CASTILIAN = {
  "Gracias": { pr: "GRAH-thyahs" },
  "No, gracias": { pr: "noh, GRAH-thyahs" },
  "Diez": { pr: "dee-ETH" },
  "Cien": { pr: "thee-EN" },
  "Está delicioso": { pr: "ehs-TAH deh-lee-THYOH-soh" },
  "A la izquierda": { pr: "ah lah eeth-KYER-dah" },
  "A la izquierda, por favor": { pr: "ah lah eeth-KYER-dah, por fah-BOR" },
  "Necesito un médico": { pr: "neh-theh-SEE-toh oon MEH-dee-koh" },
  "Necesito un médico.": { pr: "neh-theh-SEE-toh oon MEH-dee-koh" },
  "Necesito un taxi": { pr: "neh-theh-SEE-toh oon TAHK-see" },
  "Necesito el metro.": { pr: "neh-theh-SEE-toh el MEH-troh" },
  "Llame a la policía": { pr: "YAH-meh ah lah poh-lee-THEE-ah" },
  "Diez euros": { pr: "dee-ETH EH-oo-rohs" },
  "¿Cuál es la especialidad?": { pr: "kwahl ess lah ess-peh-thyah-lee-DAHD" },
  "Cuesta cien euros.": { pr: "KWESS-tah thyen EH-oo-rohss" },
  "Quiero una habitación para dos noches.": { pr: "KYEH-roh OO-nah ah-bee-tah-THYON PAH-rah dohss NOH-chess" },
  "Una habitación con baño.": { pr: "OO-nah ah-bee-tah-THYON kohn BAH-nyoh" },
  "Me duele la cabeza.": { pr: "meh DWEH-leh lah kah-BEH-thah" },
  "¿Dónde está la farmacia?": { pr: "DOHN-deh ess-TAH lah far-MAH-thyah" },
  "Aquí tiene. Gracias.": { pr: "ah-KEE TYEH-neh. GRAH-thyahs" },
  "Está bien. Gracias.": { pr: "ehs-TAH byen. GRAH-thyahs" },
  "Gracias. Mucho gusto.": { pr: "GRAH-thyahs. MOO-choh GOOS-toh" },
  // Spain wording
  "Ayuda": { tr: "¡Socorro!", pr: "soh-KOH-rroh" },
  "¿Dónde está el baño?": { tr: "¿Dónde están los servicios?", pr: "DOHN-deh ehs-TAHN lohs sehr-BEE-thyohs", en: "where are the toilets?" }
};
const needsTh = tr => /z|c[eéií]/i.test(String(tr || ""));
function fixRow(o) {
  if (!o || typeof o !== "object" || !o.tr) return o;
  const f = ES_CASTILIAN[o.tr]; return f ? Object.assign({}, o, f) : o;
}
// Deep-copies a Spanish pack (pocket, lesson steps, dialogue turns) with Castilian pronunciations.
function castilianPack(p) {
  const q = JSON.parse(JSON.stringify(p));
  q.pocket = (q.pocket || []).map(fixRow);
  q.lessons = (q.lessons || []).map(L => Object.assign(L, { steps: (L.steps || []).map(fixRow) }));
  q.dialogues = (q.dialogues || []).map(d => Object.assign(d, { turns: (d.turns || []).map(fixRow) }));
  q.sounds = (q.sounds || []).map(s => /^z \/ c/.test(s.l || "") ? Object.assign({}, s, { say: "like 'th' in 'think' in Madrid and most of Spain (like 's' in Latin America)" }) : s);
  return q;
}
module.exports = { ES_CASTILIAN, castilianPack, needsTh, fixRow };
