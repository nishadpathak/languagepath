/* LanguagePath service worker — makes the app work offline once hosted (https/localhost).
   Strategy: network-first (so edits to the single HTML file propagate), with a cache fallback
   for when you're offline — e.g. on the plane or abroad with no data. */
const CACHE = "languagepath-v26";
const CORE = [
  "./",
  "./index.html",
  "./data.js",
  "./assets/world-map.svg",
  "./logo-header.png",
  "./logo-header-light.png",
  "./about.html",
  "./privacy.html",
  "./terms.html",
  "./manifest.json",
  "./icon.png",
  "./favicon.ico",
  "./apple-touch-icon.png",
  "./og-image.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(async c => {
      // Cache each core asset individually so one failure never wipes the whole shell.
      await Promise.allSettled(CORE.map(u => c.add(u)));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // stash a fresh copy for offline use
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() =>
        caches.match(e.request, { ignoreSearch: true }).then(hit => {
          if (hit) return hit;
          // Offline SPA route: serve the app shell for any navigation (e.g. /spanish, /spanish/lesson-1)
          if (e.request.mode === "navigate") {
            return caches.match("/index.html").then(idx => idx || caches.match("/"));
          }
          return caches.match("/index.html");
        })
      )
  );
});

// Pro: "download course for offline" — page asks us to pre-cache a list of same-origin URLs
self.addEventListener("message", e => {
  const d = e.data || {}; if (d.type !== "lp-offline" || !Array.isArray(d.urls)) return;
  const urls = d.urls.filter(u => typeof u === "string" && u.startsWith("/") && !u.startsWith("//")).slice(0, 200);
  e.waitUntil(caches.open(CACHE).then(async c => { let n = 0; for (const u of urls) { try { const r = await fetch(u, { credentials: "same-origin" }); if (r.ok) { await c.put(u, r); n++; } } catch (_) {} }
    if (e.source) e.source.postMessage({ type: "lp-offline-done", n }); }));
});
