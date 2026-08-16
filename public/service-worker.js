const CACHE_NAME = 'fathakkir-v2'
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/logo.png',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
]

// Install event: precache core shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  )
  self.skipWaiting()
})

// Activate event: clean up old caches & claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
        })
      )
    )
  )
  self.clients.claim()
})

// Fetch event: Cache-First strategy for instant offline loading
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version immediately. Update in background if online (Stale-While-Revalidate)
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse))
            }
          })
          .catch(() => {
            // Offline - ignore network error, cached version already returned
          })
        return cachedResponse
      }

      // Not in cache yet: fetch from network and cache for offline use
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache))
          }
          return networkResponse
        })
        .catch(() => {
          // If offline and request is a page navigation, return index.html from cache
          if (event.request.mode === 'navigate' || event.request.destination === 'document') {
            return caches.match('./') || caches.match('./index.html')
          }
        })
    })
  )
})
