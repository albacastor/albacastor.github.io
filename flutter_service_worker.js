'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon%203.png": "5dcef449791fa27946b3d35ad8803796",
"favicon%202.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "532e3ed97e7f256632a1c7c9c65e9c21",
"index.html": "7f8b3e0005d763768bdc947970c9ec2e",
"/": "7f8b3e0005d763768bdc947970c9ec2e",
"favicon%204.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart%203.js": "79fe3af284c0efd4252d559865b2831e",
"favicon-shortcut%202.png": "3463e46314c022ffadb8f46da0f7b2e3",
"manifest%206.json": "bbf1d87ccaa600f21dd2074aaa1d6f34",
"favicon-large%202.png": "d72181cfd8ef4d771a46ad5a70e0b67b",
"main.dart.js": "9bc83522e70c9d73d2f468e29d1cf3cd",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart%202.js": "4d99ef2b41d5cabbc9225f6904821343",
"manifest%204.json": "bbf1d87ccaa600f21dd2074aaa1d6f34",
"icons/Icon-maskable-192%203.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-192%202.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192%203.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192%202.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192%205.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-192%204.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-192%206.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192%205.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192%204.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512%205.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512%206.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512%204.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-512%206.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512%205.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512%204.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512%203.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-512%202.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512%203.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512%202.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon-apple-touch%202.png": "c5d732c38b839f94fa5e60e22866dde7",
"manifest.json": "bbf1d87ccaa600f21dd2074aaa1d6f34",
"main.dart%204.js": "282e6d1f2f24aa3929d27ea4d87e58e4",
"manifest%205.json": "bbf1d87ccaa600f21dd2074aaa1d6f34",
"favicon-small%202.png": "3463e46314c022ffadb8f46da0f7b2e3",
"favicon-flutter.png": "5dcef449791fa27946b3d35ad8803796",
"favicon-small.png": "3463e46314c022ffadb8f46da0f7b2e3",
"manifest%202.json": "bbf1d87ccaa600f21dd2074aaa1d6f34",
"favicon-shortcut.png": "3463e46314c022ffadb8f46da0f7b2e3",
"assets/images/alba_logo%203.png": "ae6b3c796484173ba0a48eaa0733adbd",
"assets/images/alba_logo%202.png": "ae6b3c796484173ba0a48eaa0733adbd",
"assets/images/client_logo%205.png": "8abbd516c5bc625c0137d309694ba3bd",
"assets/images/img_avatar%203.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/images/img_avatar%202.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/images/client_logo.png": "8abbd516c5bc625c0137d309694ba3bd",
"assets/images/client_logo%204.png": "8abbd516c5bc625c0137d309694ba3bd",
"assets/images/alba_logo%205.png": "ae6b3c796484173ba0a48eaa0733adbd",
"assets/images/img_avatar%206.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/images/alba_logo%204.png": "ae6b3c796484173ba0a48eaa0733adbd",
"assets/images/img_avatar.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/images/client_logo%203.png": "8abbd516c5bc625c0137d309694ba3bd",
"assets/images/img_avatar%205.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/images/img_avatar%204.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/images/client_logo%202.png": "8abbd516c5bc625c0137d309694ba3bd",
"assets/images/alba_logo.png": "ae6b3c796484173ba0a48eaa0733adbd",
"assets/AssetManifest.json": "eb61bb0a8e7a8430e9ed78c6a8cd9aa8",
"assets/NOTICES": "6375e35833d1f1fdf1dc71f875acf2c8",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/packages/line_icons/lib/assets/fonts/LineIcons%203.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/line_icons/lib/assets/fonts/LineIcons%202.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e14d4247c0221552f79bf5629127cff4",
"assets/packages/cupertino_icons/assets/CupertinoIcons%204.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cupertino_icons/assets/CupertinoIcons%202.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cupertino_icons/assets/CupertinoIcons%203.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "64e0dfe9abf6e55063dc4bb523e39cc4",
"assets/fonts/MaterialIcons-Regular%203.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/MaterialIcons-Regular%202.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/MaterialIcons-Regular.otf": "e6979841698438146d15a5d06f8b1d13",
"assets/assets/markers/pin_blue%204.png": "befbb826dfa156df30d93032450fa3b4",
"assets/assets/markers/pin_blue%205.png": "befbb826dfa156df30d93032450fa3b4",
"assets/assets/markers/pin_blue%206.png": "befbb826dfa156df30d93032450fa3b4",
"assets/assets/markers/pin_blue%202.png": "befbb826dfa156df30d93032450fa3b4",
"assets/assets/markers/pin_blue%203.png": "befbb826dfa156df30d93032450fa3b4",
"assets/assets/markers/pin_red.png": "811511672b1965901ad31845fc6623f7",
"assets/assets/markers/pin_blue.png": "befbb826dfa156df30d93032450fa3b4",
"assets/assets/markers/pin_red%206.png": "811511672b1965901ad31845fc6623f7",
"assets/assets/markers/pin_red%204.png": "811511672b1965901ad31845fc6623f7",
"assets/assets/markers/pin_grey%202.png": "3c88c3a5f60285a47822711fd2efcc36",
"assets/assets/markers/pin_grey%203.png": "3c88c3a5f60285a47822711fd2efcc36",
"assets/assets/markers/pin_red%205.png": "811511672b1965901ad31845fc6623f7",
"assets/assets/markers/pin_grey.png": "3c88c3a5f60285a47822711fd2efcc36",
"assets/assets/markers/pin_red%202.png": "811511672b1965901ad31845fc6623f7",
"assets/assets/markers/pin_grey%204.png": "3c88c3a5f60285a47822711fd2efcc36",
"assets/assets/markers/pin_grey%205.png": "3c88c3a5f60285a47822711fd2efcc36",
"assets/assets/markers/pin_red%203.png": "811511672b1965901ad31845fc6623f7",
"favicon-apple-touch.png": "c5d732c38b839f94fa5e60e22866dde7",
"favicon-flutter%202.png": "5dcef449791fa27946b3d35ad8803796",
"manifest%203.json": "bbf1d87ccaa600f21dd2074aaa1d6f34",
"favicon-large.png": "d72181cfd8ef4d771a46ad5a70e0b67b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm%202.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit%202.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit%202.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.worker%202.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
