'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "392d5fe20a6a9a3a8b927b10f6eff2f6",
"worker.dart.js": "5588aff4f74dc3e41ef461986fb67fc3",
"version.json": "50eef373e91eef409bc6203174aea128",
"index.html": "f00685311eeca7e9870a06b367159ac6",
"/": "f00685311eeca7e9870a06b367159ac6",
"worker.sql-wasm.js": "2dcaaefaff454db5fd670fc584ed4941",
"main.dart.js": "b8f555adea6e8915c321209a8b6ae2e6",
"sqlite3.wasm": "ea3252ebfc714981d962d6871ce2ccd7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql-wasm.js": "52e710dc2a8565cd31196a9b0894c6e9",
"worker.dart": "3952a864e546009e18c2603cfc074fd7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"packages/leak_tracker_testing/DEPENDENCIES.md": "ae97b65e07cc8507a471a4da5300813e",
"packages/_fe_analyzer_shared/src/parser/parser.md": "9cc5da5eb7d930990cc9b1f176f29ed0",
"packages/flutter_lints/flutter.yaml": "09351e15da641f3a670d55c0995b3588",
"packages/web/fix_data.yaml": "aa98d8d753bc3f8c5b9532bf26df24e0",
"packages/build_web_compilers/src/dev_compiler_stack_trace/stack_trace_mapper.dart.js": "88cafcadf416dca92b2939e223145179",
"packages/leak_tracker/DEPENDENCIES.md": "022651175fddedec4587c6d335f51b36",
"packages/leak_tracker/src/DEPENDENCIES.md": "898b05bf728da8858270ba081b9f074c",
"packages/leak_tracker/src/shared/DEPENDENCIES.md": "8acf8ad9e59d5db5916776831d273285",
"packages/leak_tracker/src/leak_tracking/DEPENDENCIES.md": "3c828c2aa6268ec26032183c725ed16a",
"packages/leak_tracker/src/leak_tracking/primitives/README.md": "d77e015ef0f3a0c45c4c58a733fef250",
"packages/leak_tracker/src/devtools_integration/DEPENDENCIES.md": "e6c7cff423a7c85b3099f74d0aa5e878",
"packages/flutter/fix_data/fix_rendering.yaml": "8406dd3d3930eaeec1de152d2e9c4acc",
"packages/flutter/fix_data/fix_cupertino.yaml": "6f70252832ea31ffb0a5448685e3c631",
"packages/flutter/fix_data/fix_gestures.yaml": "10a4c4d68507978e9de1857224a4dc03",
"packages/flutter/fix_data/fix_material/fix_material.yaml": "9ef7dfaad68ac4a36f8e450e5c89c5aa",
"packages/flutter/fix_data/fix_material/fix_text_theme.yaml": "ce58f3721e77b2ee4800eaf9b17bd0ec",
"packages/flutter/fix_data/fix_material/fix_app_bar.yaml": "b94eda7a6386df1a46dc169b0305e01c",
"packages/flutter/fix_data/fix_material/fix_app_bar_theme.yaml": "c19e08351048d37597866bf9a07873c3",
"packages/flutter/fix_data/fix_material/fix_sliver_app_bar.yaml": "0da297ecb45bb0a232201939fdddefbb",
"packages/flutter/fix_data/fix_material/fix_color_scheme.yaml": "772cf5790da29e485b7833f8ffd21368",
"packages/flutter/fix_data/fix_material/fix_theme_data.yaml": "645428d6f94a0d3fddf4eb1e0ec18708",
"packages/flutter/fix_data/fix_painting.yaml": "57503933fcda53f02fc6d037d1427522",
"packages/flutter/fix_data/README.md": "889970e440716de26bb09848733b3605",
"packages/flutter/fix_data/fix_widgets/fix_list_wheel_scroll_view.yaml": "8fab446280f95ee146b16e34303702f7",
"packages/flutter/fix_data/fix_widgets/fix_drag_target.yaml": "b30635bd4cd6a940f2be5551ae146362",
"packages/flutter/fix_data/fix_widgets/fix_rich_text.yaml": "961198391cf1664fdbbdb19ff2032c38",
"packages/flutter/fix_data/fix_widgets/fix_media_query.yaml": "e2eeb288013ae42717fc11e2c41f8e72",
"packages/flutter/fix_data/fix_widgets/fix_widgets.yaml": "d648554a9f13b52f0b21c1cc438b3133",
"packages/flutter/fix_data/fix_widgets/fix_element.yaml": "e7f449804d58a1463b8c55c2af18a9ef",
"packages/flutter/fix_data/fix_widgets/fix_actions.yaml": "87bd4224401847cc5f8600af04dad754",
"packages/flutter/fix_data/fix_widgets/fix_build_context.yaml": "d5d5b5e3de898906e351de0af69263c6",
"packages/flutter/fix_data/fix_template.yaml": "0b072ed7c2603618de4fd8e19d9347a3",
"packages/flutter/fix_data/fix_services.yaml": "fc80286518b19a274dfecd47ca08e2bd",
"packages/flutter/analysis_options.yaml": "d3f62ba63d843b00828c96e5a31b7940",
"packages/flutter/src/foundation/README.md": "d3f31f9f1f6bdfd229d30fe803fcf2a4",
"packages/flutter/src/material/shaders/ink_sparkle.frag": "a0e89676ccae6cf3669483d52fa61075",
"packages/sky_engine/_internal/allowed_experiments.json": "b849c39367ad13c92d56a26ab92036c2",
"packages/sky_engine/_embedder.yaml": "b409becf9615c3dd01464b69ef0e56a3",
"packages/build_runner/src/server/build_updates_client/live_reload_client.js": "1fe2144d8180add0ad92530b819459f6",
"packages/build_runner/src/server/README.md": "89f3aa9fc46568ce09951de5b08f1f6c",
"packages/build_runner/src/server/graph_viz.js": "5cb7c6ad887549a6921d815effd9cc2c",
"packages/build_runner/src/server/graph_viz_main.dart.js": "40d4aa46d9af2d4f37ba70c409c4c613",
"packages/build_runner/src/server/graph_viz.html": "e163ea0ec53d64545bec6aadab2fb8dd",
"packages/drift_test/ui/page/home/view.dart.drift_elements.json": "de6ed17af30deadd273fd411bb7de7ec",
"packages/drift_test/ui/page/home/controller.dart.drift_elements.json": "171ac4994f2a375d664009d3cac9f5e0",
"packages/drift_test/ui/page/chat/widget/chat_item.dart.drift_elements.json": "0e2adc74e964a1ad7c267eae08524bc8",
"packages/drift_test/ui/page/chat/info/view.dart.drift_elements.json": "85a3f3bbece8eb0f40052c37cbf794a3",
"packages/drift_test/ui/page/chat/info/controller.dart.drift_elements.json": "39fcd15ce803650928f0ed5e3beac5a6",
"packages/drift_test/ui/page/chat/view.dart.drift_elements.json": "df3c46c4cf401564ea8668e6bdabf374",
"packages/drift_test/ui/page/chat/controller.dart.drift_elements.json": "45da1f7db0a7939d0ad90ebffe4d96bc",
"packages/drift_test/ui/page/user/widget/single_field.dart.drift_elements.json": "afbdffe07ffb285d08af4665521ff855",
"packages/drift_test/ui/page/user/view.dart.drift_elements.json": "2ecb4dece47fc0b70d6c82e8fd3f4a6f",
"packages/drift_test/ui/page/user/controller.dart.drift_elements.json": "e009f174f602516ddf08bff5000ee6a5",
"packages/drift_test/ui/widget/avatar.dart.drift_elements.json": "4c8e33dc78ed3573360d2df1ce52cef3",
"packages/drift_test/main.dart.drift_elements.json": "5321e2198c0622540a1b82cc1e84d771",
"packages/drift_test/util/diff.dart.drift_elements.json": "21e712e7f179f0337e5a073e2d1d2db8",
"packages/drift_test/util/obs/obs_list.dart.drift_elements.json": "549367b15acb6a91ac1882f67abbe770",
"packages/drift_test/util/obs/rx_list.dart.drift_elements.json": "22e4726f9b099a6f749aa442f5eee28d",
"packages/drift_test/util/obs/rx_sorted_map.dart.drift_elements.json": "d9c2cb719a9a99821899238f683ddc77",
"packages/drift_test/util/obs/obs_map.dart.drift_elements.json": "549367b15acb6a91ac1882f67abbe770",
"packages/drift_test/util/obs/sorted_map.dart.drift_elements.json": "a92d72bd581fbceca7bdbd6dc0e69b74",
"packages/drift_test/util/new_type.dart.drift_elements.json": "21e712e7f179f0337e5a073e2d1d2db8",
"packages/drift_test/provider/drift/connection/interface.dart.drift_elements.json": "6de8d300c0a7506bc4d0aec8d8a3e7c9",
"packages/drift_test/provider/drift/connection/connection.dart.drift_elements.json": "cbba207c63a56981a9af26873fd6a960",
"packages/drift_test/provider/drift/connection/js.dart.drift_elements.json": "ded3580c970ca078aa2f1cb8985428fe",
"packages/drift_test/provider/drift/connection/ffi.dart.drift_elements.json": "aa572d1cf6b351f0abf8e702b4cf9dc7",
"packages/drift_test/provider/drift/chat.dart.drift_elements.json": "86fe921d52817fe4823972ad5c64eb57",
"packages/drift_test/provider/drift/user.dart.drift_elements.json": "a8335de7b3ed8e9602238ccb854888e0",
"packages/drift_test/provider/drift/chat_member.dart.drift_elements.json": "cb725d298a087971f554383612321820",
"packages/drift_test/provider/drift/common.dart.drift_elements.json": "6de8d300c0a7506bc4d0aec8d8a3e7c9",
"packages/drift_test/provider/drift/drift.dart.drift_elements.json": "2dae68024c047bc4c4c69b1fab6eb9f7",
"packages/drift_test/provider/drift/account.dart.drift_elements.json": "a5120f621061baebd1b11509982b3c27",
"packages/drift_test/provider/drift/chat_item.dart.drift_elements.json": "9928e2b9d5a9192ea247927d9a2cf195",
"packages/drift_test/domain/repository/pagination.dart.drift_elements.json": "08b88441f71109f10d06dd029955b02d",
"packages/drift_test/domain/repository/chat.dart.drift_elements.json": "0c1fe1c347963b51e22135278fb5ba17",
"packages/drift_test/domain/repository/user.dart.drift_elements.json": "b7a050c8a8648798d6ad39dbed9958c4",
"packages/drift_test/domain/repository/auth.dart.drift_elements.json": "a696388e6c6e2e2a7c9557b8e1c0f4f0",
"packages/drift_test/domain/model/attachment.dart.drift_elements.json": "ddc2dab6d4d6c4474a3f1f71a711f32d",
"packages/drift_test/domain/model/file.dart.drift_elements.json": "540c50901943ccc65078d0e621b55073",
"packages/drift_test/domain/model/chat.dart.drift_elements.json": "49afb4f7e2b57ba47dfa216ac5852b8d",
"packages/drift_test/domain/model/user.dart.drift_elements.json": "a5bf24dc63fe9712fdcbd84f1a1ca4cc",
"packages/drift_test/domain/model/chat_member.dart.drift_elements.json": "e04d3fd9abfbbff04ad0fe5c2993deac",
"packages/drift_test/domain/model/chat_forward.dart.drift_elements.json": "921b925c321fbe2622a72ed38139edb9",
"packages/drift_test/domain/model/chat_item_quote.dart.drift_elements.json": "ab2714268ef3b6aa43d4b986e091bec0",
"packages/drift_test/domain/model/chat_message.dart.drift_elements.json": "c4b851d0e215c5cfa2c7f9d78550d975",
"packages/drift_test/domain/model/chat_call.dart.drift_elements.json": "53d51ca27dda9adba33479b8358ec2b9",
"packages/drift_test/domain/model/chat_item.dart.drift_elements.json": "65db6767ff090bd71676870cbaa74836",
"packages/drift_test/domain/model/chat_info.dart.drift_elements.json": "382faa769fa8576624e3ac7adfb95aaf",
"packages/drift_test/store/pagination/drift.dart.drift_elements.json": "0c08a4872578e3174aa7e07e9789a870",
"packages/drift_test/store/user_rx.dart.drift_elements.json": "1d54018c413cd248d633d6b6259c654f",
"packages/drift_test/store/chat.dart.drift_elements.json": "4a1850b2eeae2771c4a822efb475da47",
"packages/drift_test/store/user.dart.drift_elements.json": "4c3152b2a55d49ba3d60733b90cfb77f",
"packages/drift_test/store/auth.dart.drift_elements.json": "6e0c0970ea664c3b006ffc6eb336fd0b",
"packages/drift_test/store/chat_rx.dart.drift_elements.json": "fd745372580b4b55d448e24cc8793585",
"packages/drift_test/store/paginated.dart.drift_elements.json": "4cbc56ab7dea31c046a2a9ed305f3cb4",
"packages/$sdk/dev_compiler/ddc/ddc_module_loader.js": "911e287339659b4a7670344306f944cb",
"packages/$sdk/dev_compiler/web/dart_stack_trace_mapper.js": "960dec05eb566acdc1f0333285e5a040",
"packages/$sdk/dev_compiler/amd/require.js": "eb0ef9ae5ed627559fa95dce2937ac06",
"packages/lints/recommended.yaml": "00bb741f8ec00c3e335f2a2114288ffb",
"packages/lints/core.yaml": "09140a730fcca5bd8d653678f5532e0c",
"packages/win32/fix_data/fix_winsock2/fix_constants.yaml": "6cf77409b5a01c9617c6fa7d0d698651",
"packages/win32/fix_data/README.md": "3731d53ff6d236cff12dee7eba967b59",
"packages/win32/fix_data/fix_win32/fix_callbacks.yaml": "12904ed8e6628bc84a7b1e7f85d83e5b",
"packages/win32/fix_data/fix_win32/fix_constants.yaml": "6602b025d166c3439fb6ed0821e211be",
"packages/win32/fix_data/fix_template.yaml": "dbe0073cb4b739600f956cc61c1f223d",
"packages/flutter_test/fix_data/template.yaml": "14c6ed431a80a3c6c6a0a82b6e2df026",
"packages/flutter_test/fix_data/README.md": "35c4eec3808755d35ce4c56068902bb5",
"packages/flutter_test/fix_data/fix_flutter_test/fix_binding/fix_live_test_widgets_flutter_binding.yaml": "cb96681ea866449c69ee6cb4777c6a3a",
"packages/flutter_test/fix_data/fix_flutter_test/fix_binding/fix_test_widgets_flutter_binding.yaml": "68b8c3cd2fd0fc1dff6903202616c440",
"packages/flutter_test/fix_data/fix_flutter_test/fix_binding/fix_automated_test_widgets_flutter_binding.yaml": "e976cc6922b41dc1346f6669a037baae",
"packages/flutter_test/fix_data/fix_flutter_test/fix_animation_sheet_builder.yaml": "1dda1f7b740a1ba233e402bd83ee4a82",
"packages/flutter_test/fix_data/fix_flutter_test/fix_widget_tester.yaml": "0f458b047bb4b243866f9de6ab3bfa75",
"packages/analyzer/fix_data.yaml": "fb325e7d13b7b91b4b3774edcf044585",
"packages/analyzer/src/wolf/README.md": "95ca0325bb300f63bb84ce39f0ac1657",
"packages/analyzer/src/summary/format.fbs": "7ea0c45fec6f986dca3ca580c2548bac",
"manifest.json": "96a938b9534079f48adf03a2a457de58",
".dart_tool/package_config.json": "24ffd368d9ac6d3d789707c599c7aff0",
"worker.dart.min.js": "610f1e93dd92c94c799cd4683ed1b379",
"worker.dart.drift_elements.json": "1d4bfa0b4c8aa352a8e42a12598c016c",
"drift_worker.dart.js": "4244e6bd89b69cde21f023a3268e50f7",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "0edc4391b2fb43081e435c40c9b35b1a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "a797e4ecab6afd32204a39de4afdf5f9",
"sql-wasm.wasm": "3a12e74b0eac1b2991967359f985a4a0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
