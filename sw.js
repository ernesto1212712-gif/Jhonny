
const CACHE_NAME = 'jhonny-vip-v3-elite';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/index.tsx',
  '/manifest.json',
  '/types.ts',
  '/constants.ts',
  '/App.tsx',
  'https://ibb.co/dsxvYPF8',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap'
];

// Instalación: Guardar archivos críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Protocolo Offline: Archivos críticos encriptados en caché.');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activación: Limpiar versiones antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepción: Estrategia de Cache-First con actualización dinámica
self.addEventListener('fetch', (event) => {
  // Solo interceptar peticiones GET (navegación y recursos)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si está en caché, lo devolvemos inmediatamente para velocidad extrema
      if (cachedResponse) {
        // Intentamos actualizar el caché en segundo plano para la próxima vez
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {
          // Si falla el fetch en segundo plano, no importa, ya servimos el caché
        });
        return cachedResponse;
      }

      // Si no está en caché, vamos a la red y guardamos el resultado
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Si no hay red y no está en caché, mostramos la página de inicio si es una navegación
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      });
    })
  );
});
