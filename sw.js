// CC Diagnóstico NL — Service Worker
const CACHE = 'cc-diagnostico-v1';
const SCOPE = '/DIAGNOSTICO_CC/';

// Archivos a cachear para uso offline
const PRECACHE = [
  '/DIAGNOSTICO_CC/',
  '/DIAGNOSTICO_CC/index.html',
  '/DIAGNOSTICO_CC/tablero_cc.html',
  '/DIAGNOSTICO_CC/manifest.json'
];

// Instalar: cachear archivos del scope
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).catch(() => {})
  );
  self.skipWaiting();
});

// Activar: limpiar caches viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: solo cachear archivos del scope, ignorar externos (Apps Script, Sheets, etc.)
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Ignorar completamente peticiones externas — Apps Script, Google Sheets, CDNs
  if (url.origin !== self.location.origin) return;

  // Solo manejar GET del scope propio
  if (e.request.method !== 'GET') return;
  if (!url.pathname.startsWith(SCOPE)) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match('/DIAGNOSTICO_CC/index.html'));
    })
  );
});
