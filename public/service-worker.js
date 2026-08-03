const CACHE_NAME = 'fathakkir-v1'
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  ))
  self.clients.claim()
})

const addToCache = async (request, response) => {
  if (!response || response.status !== 200 || response.type === 'opaque') {
    return response
  }
  const cache = await caches.open(CACHE_NAME)
  cache.put(request, response.clone())
  return response
}

self.addEventListener('fetch', (event) => {
  const request = event.request

  if (request.mode === 'navigate' || (request.destination === 'document' && request.method === 'GET')) {
    event.respondWith(
      fetch(request)
        .then((response) => addToCache(request, response.clone()))
        .catch(() => caches.match(request).then((cachedResponse) => cachedResponse || caches.match('./')))
    )
    return
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse
      }
      return fetch(request)
        .then((response) => addToCache(request, response.clone()))
        .catch(() => {
          if (request.destination === 'image') {
            return new Response('', { status: 404 })
          }
        })
    })
  )
})
