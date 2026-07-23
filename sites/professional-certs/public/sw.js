// Wyatt's Notes Service Worker
// Stale-While-Revalidate for HTML, Cache-First for assets, Network-First for API

const CACHES = {
  static: 'wn-static-v1',
  pages: 'wn-pages-v1',
  api: 'wn-api-v1',
}

const PRECACHE_URLS = [
  '/fonts/Inter-latin.woff2',
  '/fonts/JetBrainsMono-latin.woff2',
  '/reader.js',
  '/cross-site-search.js',
  '/page-search.js',
]

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting()
})

self.addEventListener('install', event => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHES.static).then(cache =>
      Promise.allSettled(
        PRECACHE_URLS.map(url =>
          fetch(url)
            .then(r => {
              if (r.ok) cache.put(url, r)
            })
            .catch(() => {}),
        ),
      ),
    ),
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(k => k.startsWith('wn-') && !Object.values(CACHES).includes(k))
            .map(k => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

async function cacheFirst(request) {
  const cached = await caches.match(request)
  if (cached) return cached
  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(CACHES.static)
      cache.put(request, response.clone())
    }
    return response
  } catch {
    return cached || new Response('Offline', { status: 503 })
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHES.pages)
  const cached = await cache.match(request)

  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok) cache.put(request, response.clone())
      return response
    })
    .catch(() => cached)

  return cached || fetchPromise
}

async function networkFirst(request) {
  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(CACHES.api)
      cache.put(request, response.clone())
    }
    return response
  } catch {
    const cached = await caches.match(request)
    return (
      cached ||
      new Response(JSON.stringify({ error: 'Offline' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      })
    )
  }
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return

  const url = new URL(event.request.url)

  if (url.pathname.startsWith('/api/') || url.hostname === 'search.wyattau.com') {
    event.respondWith(networkFirst(event.request))
    return
  }

  if (url.pathname.match(/\.(woff2|css|js|svg|png|jpg|webp|avif)$/)) {
    event.respondWith(cacheFirst(event.request))
    return
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(staleWhileRevalidate(event.request))
    return
  }
})
