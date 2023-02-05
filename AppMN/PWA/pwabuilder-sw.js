

// UPDATED: 2/2/22

const CACHE_NAME = 'v1';
const INITIAL_CACHED_RESOURCES = [ 
'../',
'../indexApp.html',
'../javascript_nova/gzip1041-2.js',
'../gzipea95.js',
'../gzip1041.js',
'../gzipe0f1.js',
'../gzip8049.js',
'../gzip8252.js',
'../gzipdd81.js',
'../basica-a.min.js',
'../basica-c.min.js',
'../basica-e.min.js',
'../javascript_nova/bsc-a.min2.js',
'../css/uikit.min.css',
'../imagens/logo2',
'../imagens/branco/Prancheta1copia2.png',
'../imagens/branco/Prancheta1copia8.png',
'../imagens/branco/Prancheta1copia5.png',
'../imagens/branco/Prancheta1copia2.png',
'../imagens/branco/Prancheta1copia10.png',
'../imagens/branco/Prancheta1copia4.png',
'../imagens/branco/Prancheta1copia14.png',
'/imagens/branco/Prancheta1copia13.png',
'imagens/branco/Prancheta1copia.png',
'imagens/branco/Prancheta1copia12.png',
'imagens/branco/Prancheta1copia9.png',
'./imagens/branco/Prancheta1copia7.png',	
'./imagens/branco/Prancheta1copia3.png',		
];
// Cached resources that match the following strings should not be periodically updated.
// These are the tips html pages themselves, and their images.
// Everything else, we try to update on a regular basis, to make sure lists of tips get updated and css/js are recent too.
const DONT_UPDATE_RESOURCES = [
    '/tips/',
    '/assets/img/'
];

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(INITIAL_CACHED_RESOURCES);
    })());
});

// We have a cache-first strategy, where we look for resources in the cache first
// and only on the network if this fails.
// We also periodically update the cache in the background for the main pages.
self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);

        // Try the cache first.
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse !== undefined) {
            // Cache hit, let's send the cached resource.
            return cachedResponse;
        } else {
            // Nothing in cache, let's go to the network.

            try {
                const fetchResponse = await fetch(event.request);
                if (!event.request.url.includes('google-analytics') && !event.request.url.includes('browser-sync')) {
                    // Save the new resource in the cache (responses are streams, so we need to clone in order to use it here).
                    cache.put(event.request, fetchResponse.clone());
                }

                // And return it.
                return fetchResponse;
            } catch (e) {
                // Fetching didn't work let's go to the error page.
                if (event.request.mode === 'navigate') {
                    await rememberRequestedTip(event.request.url);
                    const errorResponse = await cache.match('/offline/');
                    return errorResponse;
                }
            }
        }
    })());
});
