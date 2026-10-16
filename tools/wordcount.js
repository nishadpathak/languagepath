// Shared: count visible words of a prerendered page's ACTIVE view (what a visitor/crawler sees as page content)
"use strict";
function activeViewHTML(html) {
  const m = html.match(/<section class="view active" id="view-([a-z]+)">([\s\S]*?)<\/section>\n/);
  return m ? { view: m[1], html: m[2] } : { view: null, html: "" };
}
function textOf(h) {
  return h.replace(/<(script|style|noscript|template)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
}
function words(t) {
  // Latin/Cyrillic/etc. tokens count as words; CJK/Thai-like scripts with no spaces count ~1 word per 2 chars
  let n = (t.match(/[\p{L}\p{N}][\p{L}\p{N}'’\-]*/gu) || []).filter(w => !/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af\u0e00-\u0e7f]/.test(w)).length;
  const cjk = (t.match(/[\u3040-\u30ff\u3400-\u9fff\u0e00-\u0e7f]/g) || []).length; return n + Math.round(cjk / 2);
}
function pageWords(html) { const a = activeViewHTML(html); return { view: a.view, words: words(textOf(a.html)) }; }
module.exports = { activeViewHTML, textOf, words, pageWords };
