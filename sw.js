// Service Worker per installabilità PWA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Lascia gestire le richieste di rete normalmente
});

