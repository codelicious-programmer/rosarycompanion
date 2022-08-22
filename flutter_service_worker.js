'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3c805495a8a601a3c85264389a30a2ed",
"assets/assets/GM1.jpg": "496c49d90e78de27e2746493e585c5e0",
"assets/assets/GM2.jpg": "477a1816da5beed8c4b766e18bd0c8a2",
"assets/assets/GM3.jpg": "48da46d262b204eb62f3830cc1767b72",
"assets/assets/GM4.jpg": "a8b975457d4cd156d2d67e98ef5df18a",
"assets/assets/GM5.jpg": "3273e8b339c16dd501e0ce2ac13275ef",
"assets/assets/holyfamily.jpg": "a57dd01a241e1ab4b3175be4178f62a6",
"assets/assets/JM1.jpg": "e98091adc533047fe988071f0fb75309",
"assets/assets/JM2.jpg": "9da612ffb1330b7571944465edd3829b",
"assets/assets/JM3.jpg": "76820489d491c4fb637564bfc3b5ccd2",
"assets/assets/JM4.jpg": "0f8cb56ed2d88534c42f3a4e77ee6b25",
"assets/assets/JM5.jpg": "50d66b58d7bafd2a3ec8e4193ac07121",
"assets/assets/lightbg.jpg": "7875efe89d65cf4a78bbb98b9701e054",
"assets/assets/LM1.jpg": "025117727e157256e7949d404ae16827",
"assets/assets/LM2.jpg": "50189a7ca09e53df151c5b64e5f5925c",
"assets/assets/LM3.jpg": "6be457547b8d4e586cf94e8ab4d43415",
"assets/assets/LM4.jpg": "0d5a03ac30fa37d27de5b19807786e5a",
"assets/assets/LM5.jpg": "877824bbd023d51b4816a6bf425f4b9e",
"assets/assets/LourdesMB.jpg": "199a9393f348a9a999f6f0708750f341",
"assets/assets/mother_mary_standing_rosary.jpg": "c62b6f4a421a3c36e8b451e859ea570c",
"assets/assets/mother_mary_standing_rosary.svg": "41ed96c20fa5d0db6ad8b43181fcbf7b",
"assets/assets/rcbgflowery.jpg": "eafe3b5d268bfe81d98fe3006bdb5f9e",
"assets/assets/rosarycompanionappicon.jpg": "7a7faefa7462b5d1c36b4e576d4bfed9",
"assets/assets/rosarycompnaionpinkwallpaper.jpg": "9a056e23559b79bc9dc23eaa36b93243",
"assets/assets/SM1.jpg": "cf808edc54eaa95d10df30e0c8d35d79",
"assets/assets/SM2.jpg": "50e251d57d67fe69af120444336d4fb3",
"assets/assets/SM3.jpg": "fe2fba427fb5a3f76b522c8ed9f95e01",
"assets/assets/SM4.jpg": "590e5c4274142c2b546a1a3d882cdef5",
"assets/assets/SM5.jpg": "81e3dcd7b757a2c3eb2a043df3282a57",
"assets/FontManifest.json": "5cf7ec3ef8daa4cfec6d1305f2f4c4d1",
"assets/fonts/ArimaMadhurai.ttf": "d14fdcaf9b4664de7a02d84a96fd169b",
"assets/fonts/Bree-Serif.ttf": "62d0db6be170a306a0fa4a10d8ab3448",
"assets/fonts/FredokaOne.ttf": "6245699196cbb2f926a14ddd2598bd90",
"assets/fonts/KimberlyIcons.ttf": "fb842a908d5dc51b4fa455e9f1ead7f9",
"assets/fonts/KimberlyRCIcons.ttf": "8091203c104131c2e85af5cd749ad7c0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/OleoScriptSwashCaps-Bold.ttf": "6432414ab1365d58d7423f0ac6232577",
"assets/fonts/OleoScriptSwashCaps-Regular.ttf": "cedd93aff0900036032396ae5ba6fee2",
"assets/fonts/Shrikhand-Regular.ttf": "b2142f626983b4a663cb43a84f2e086d",
"assets/NOTICES": "7a685953e50c3d852fd7dabd61b45bb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "9eb8a7030c1073cc04ae1667e267e9e2",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f1e89dd5f3e47404e24b83b501498a5",
"/": "3f1e89dd5f3e47404e24b83b501498a5",
"main.dart.js": "ebec18b86044d2af8eb9f84cf734be72",
"manifest.json": "2667d20e1a49fb69f890763da6b9f31e",
"version.json": "201162a90575022bb3cd41fb1f085133"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
