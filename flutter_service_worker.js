'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "6aeacf05115c22948241455830a14da3",
"icons/Icon-192.png": "452f1cddd043b8170038dbdfbf561677",
"assets/assets/settings.json": "00166b63d8205cef1423053e723c2ffc",
"assets/assets/env": "37c9cd15b66589d47eba950696ccce09",
"assets/assets/octocat.png": "6aeacf05115c22948241455830a14da3",
"assets/assets/md/water_containment/_page_11_Picture_0.jpeg": "83eacd9076b82257796166dab730f999",
"assets/assets/md/water_containment/_page_11_Figure_4.jpeg": "a1f16930e09364119903c554e4e3997a",
"assets/assets/md/water_containment/_page_11_Figure_3.jpeg": "cc042a24a0af8e293525a99f6fae113f",
"assets/assets/md/water_containment/_page_6_Picture_4.jpeg": "3e5453885f083653471ac3d68a15f11e",
"assets/assets/md/water_containment/_page_7_Picture_2.jpeg": "36630181b05fc96adeb54d03bf820e1a",
"assets/assets/md/water_containment/_page_10_Figure_0.jpeg": "dfea78281442b9e6f7bac4004c01c29b",
"assets/assets/md/water_containment/_page_7_Picture_1.jpeg": "d2aa9574ecdf54e0daba42c8439bfe75",
"assets/assets/md/water_containment/water_containment.md": "db5ca0f42d944b356cd74aa52bddbdc3",
"assets/assets/md/water_containment/_page_6_Picture_0.jpeg": "c650e5fa6a3ba17e0b5cb1be11649749",
"assets/assets/md/photo_gimp.md": "aa05e8fbfda94db1c26d79f0e3d6028d",
"assets/assets/md/about.md": "aa05e8fbfda94db1c26d79f0e3d6028d",
"assets/assets/md/smart_farm/_page_4_Figure_8.jpeg": "5ba95d526e52e2c6b89479ed3f8c8e25",
"assets/assets/md/smart_farm/_page_4_Picture_9.jpeg": "22780bfa6e3794078f0f5e2e0d527e25",
"assets/assets/md/smart_farm/_page_6_Figure_1.jpeg": "1abe450bfc8a9bee94728542649884c6",
"assets/assets/md/smart_farm/image12.png": "f276112b670f603004d7b2f1e87bd630",
"assets/assets/md/smart_farm/_page_5_Picture_4.jpeg": "eb2587544196c895fbe2f84ab6cb0b82",
"assets/assets/md/smart_farm/_page_8_Picture_10.jpeg": "55b4365ac5a55255a89b96ba8a4b5e2f",
"assets/assets/md/smart_farm/_page_4_Figure_5.jpeg": "196c5037bf6287dd6efb3ef3e21b7b43",
"assets/assets/md/smart_farm/image16.png": "b967b129d7dd3385bd9724ee8b6461ed",
"assets/assets/md/smart_farm/_page_7_Picture_1.jpeg": "96741d6278469e267605a0b52b358a29",
"assets/assets/md/smart_farm/image17.png": "884ff297ac6ddb010cb3fe327afbaf74",
"assets/assets/md/smart_farm/_page_9_Picture_8.jpeg": "a0fe719a2c84ae8f447bece3e7d985ed",
"assets/assets/md/smart_farm/_page_3_Picture_1.jpeg": "85d67a317a5924f407b91e73f7032808",
"assets/assets/md/smart_farm/_page_2_Picture_5.jpeg": "a866179d2d3f55eaafb374d5536ba601",
"assets/assets/md/smart_farm/_page_3_Picture_9.jpeg": "35b93e0e656ba97e4941bb117bbee2dc",
"assets/assets/md/smart_farm/_page_4_Figure_1.jpeg": "0e9e11ef38634105f24d241a21e5ecd9",
"assets/assets/md/smart_farm/_page_9_Picture_4.jpeg": "d717171b44a1ae8a0212f3401beb8bf6",
"assets/assets/md/smart_farm/image11.png": "3a36183eed4cffc594e260dedea323dd",
"assets/assets/md/smart_farm/_page_3_Figure_5.jpeg": "77958d57f7e2670a12c48acae527c20a",
"assets/assets/md/smart_farm/smart_farm.md": "72f9a32b0b00447629a9c1cb17ecd9a7",
"assets/assets/inspectocat.png": "3340e1d594d84257192fe065b750630f",
"assets/AssetManifest.bin": "0dd2581b6e902dcdf2a5f6437eb7e606",
"assets/NOTICES": "092f337569c22de943d73c16ea2de9dc",
"assets/AssetManifest.json": "bda81238a2a0550da0574d9fa11454fa",
"assets/fonts/MaterialIcons-Regular.otf": "4a5fb92e240d21a204c92a3edb030739",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "eeda9081e29e29a9e3dac1848207f98e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0bfcc89b0c7c8c43c458ee6ad9277c3f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "29a4f7ae018b912fed3bd5d590797c88",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "8c86c6103160d583e83911bbbd15d295",
"version.json": "f42b5c2792ac6f17182094c0ad9ceae6",
"manifest.json": "65553957899562dcbeb838dcd9eceb43",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"index.html": "1101763f6b8b6948c2b01e203e466c35",
"/": "1101763f6b8b6948c2b01e203e466c35",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "c03df8c10ffb6a261441f0b3a5671db8",
"flutter_bootstrap.js": "fd310c05d330225c6b5051d28c9e6201",
"main.dart.js": "ca2f56dbf84776f50216cba7632cc6fd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
