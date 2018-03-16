/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");

importScripts(
  "/fluent-bootstrap/assets/precache-manifest.f6d8fc13c75e96f98d65038ab3550fef.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.html",
    "revision": "d63c9a5522eb7c591049cd59f0cd9125"
  },
  {
    "url": "assets/fluent-bootstrap.css",
    "revision": "8897f9b6c415a0d23c29bc2e98ee7c9f"
  },
  {
    "url": "assets/fluent-bootstrap.js",
    "revision": "172091017bbfe31ab2f70662336497ea"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.af7ae505.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.b06871f2.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.fee66e71.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "assets/precache-manifest.f6d8fc13c75e96f98d65038ab3550fef.js",
    "revision": "f6d8fc13c75e96f98d65038ab3550fef"
  },
  {
    "url": "buttons.html",
    "revision": "96756d43eb9e2ea93389538d6f8cec10"
  },
  {
    "url": "cards.html",
    "revision": "9965ab2018dde3f967bb49f5129d209b"
  },
  {
    "url": "carousel.html",
    "revision": "09cab3b805e42805bf744ae7d8fe0e4a"
  },
  {
    "url": "css/highlight.css",
    "revision": "e3aa1abd15ca611afe194656987efca0"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "forms.html",
    "revision": "2f3d6aa1fdf419cb1b64b040418d61cf"
  },
  {
    "url": "icon/android-chrome-144x144.png",
    "revision": "f7cffb2d13e0c7d3a07c2d3b376d0b55"
  },
  {
    "url": "icon/android-chrome-192x192.png",
    "revision": "eb570f68b4a7917a46dd27a51b6b5213"
  },
  {
    "url": "icon/android-chrome-256x256.png",
    "revision": "7e013e3bcfc7b9fae856de62701a7172"
  },
  {
    "url": "icon/android-chrome-36x36.png",
    "revision": "16c892c2451991aab4f942e8ae384964"
  },
  {
    "url": "icon/android-chrome-384x384.png",
    "revision": "6f05688856d08dd7d51f209af88ea8ba"
  },
  {
    "url": "icon/android-chrome-48x48.png",
    "revision": "dec744abfa4a8e9003ddc02657cd968e"
  },
  {
    "url": "icon/android-chrome-512x512.png",
    "revision": "46f2bd798fb8ebc8fc5c3ba6652fc298"
  },
  {
    "url": "icon/android-chrome-72x72.png",
    "revision": "12731a2d1e9e41fee3604f0d4de4e2f3"
  },
  {
    "url": "icon/android-chrome-96x96.png",
    "revision": "fbd8c909b85500996d1bf4752e21a003"
  },
  {
    "url": "icon/apple-touch-icon-114x114.png",
    "revision": "c8bf22b569c0b9fecdd7afb25fa07f8d"
  },
  {
    "url": "icon/apple-touch-icon-120x120.png",
    "revision": "802591e78ecf457b02d9204a3f039e4c"
  },
  {
    "url": "icon/apple-touch-icon-144x144.png",
    "revision": "f7cffb2d13e0c7d3a07c2d3b376d0b55"
  },
  {
    "url": "icon/apple-touch-icon-152x152.png",
    "revision": "79903631c2cc86bc4fb1cb73d1bc30bd"
  },
  {
    "url": "icon/apple-touch-icon-167x167.png",
    "revision": "15a3231b16de450ff38d66f21274be6d"
  },
  {
    "url": "icon/apple-touch-icon-180x180.png",
    "revision": "a099ffca0d067230bb783ceb3a16ba2c"
  },
  {
    "url": "icon/apple-touch-icon-57x57.png",
    "revision": "3289a03f5de40baf5442ed75da06e5b4"
  },
  {
    "url": "icon/apple-touch-icon-60x60.png",
    "revision": "d138543fa3bfd00daa3843c07e856e3c"
  },
  {
    "url": "icon/apple-touch-icon-72x72.png",
    "revision": "12731a2d1e9e41fee3604f0d4de4e2f3"
  },
  {
    "url": "icon/apple-touch-icon-76x76.png",
    "revision": "69964f8715770f754f74fa062e52cd93"
  },
  {
    "url": "icon/apple-touch-icon-precomposed.png",
    "revision": "a099ffca0d067230bb783ceb3a16ba2c"
  },
  {
    "url": "icon/apple-touch-icon.png",
    "revision": "a099ffca0d067230bb783ceb3a16ba2c"
  },
  {
    "url": "icon/apple-touch-startup-image-1182x2208.png",
    "revision": "4512160d7eb80fc019e445e95353dc50"
  },
  {
    "url": "icon/apple-touch-startup-image-1242x2148.png",
    "revision": "a271912b474d3a5d426bb54a9304bec4"
  },
  {
    "url": "icon/apple-touch-startup-image-1496x2048.png",
    "revision": "cc199013d74b51cfe2bd4ae9583ece73"
  },
  {
    "url": "icon/apple-touch-startup-image-1536x2008.png",
    "revision": "f201f931e984bbbf3c59dbd234d2281c"
  },
  {
    "url": "icon/apple-touch-startup-image-320x460.png",
    "revision": "4fb52337f7e0d5b8b96c7fd6aae0e86b"
  },
  {
    "url": "icon/apple-touch-startup-image-640x1096.png",
    "revision": "60b87cc54e0a0a21bfde678dc85c7eed"
  },
  {
    "url": "icon/apple-touch-startup-image-640x920.png",
    "revision": "d33c79081efbe1c7e2474d51f606c932"
  },
  {
    "url": "icon/apple-touch-startup-image-748x1024.png",
    "revision": "4c89b8c4f75e8270c90d1ee055365b2e"
  },
  {
    "url": "icon/apple-touch-startup-image-750x1294.png",
    "revision": "beb33214aae33a3859a4d09abdcd719c"
  },
  {
    "url": "icon/apple-touch-startup-image-768x1004.png",
    "revision": "266f0e6a8a466ceb068dd068ea337e25"
  },
  {
    "url": "icon/coast-228x228.png",
    "revision": "25dffe677c410ca62891cfd960b2f033"
  },
  {
    "url": "icon/favicon-16x16.png",
    "revision": "8406fbd98a46c0495c5bc41764d41f03"
  },
  {
    "url": "icon/favicon-32x32.png",
    "revision": "3d3069e6224b5319e6f8c3dab978ee50"
  },
  {
    "url": "icon/firefox_app_128x128.png",
    "revision": "ea46845548bdd2f3c6d38ffba2bea7a8"
  },
  {
    "url": "icon/firefox_app_512x512.png",
    "revision": "36ca64ccd49b4514b7f55333dcfd0148"
  },
  {
    "url": "icon/firefox_app_60x60.png",
    "revision": "376383b60c41c67d5203e1fae9512727"
  },
  {
    "url": "icon/index.html",
    "revision": "ecfbe74f859a591f9248f7792b84dc94"
  },
  {
    "url": "icon/mstile-144x144.png",
    "revision": "f7cffb2d13e0c7d3a07c2d3b376d0b55"
  },
  {
    "url": "icon/mstile-150x150.png",
    "revision": "32c3ad637dc452f92f7eaf0e7d01d7c8"
  },
  {
    "url": "icon/mstile-310x150.png",
    "revision": "bafaf684276727b684b78290ff09b95f"
  },
  {
    "url": "icon/mstile-310x310.png",
    "revision": "48581c8379c1ef86ad5259bca41643f9"
  },
  {
    "url": "icon/mstile-70x70.png",
    "revision": "9e4fa1b2e3f3fbc32b08e27ea6e3f606"
  },
  {
    "url": "icon/yandex-browser-50x50.png",
    "revision": "9e91334e6e674e596f0186264f2758dc"
  },
  {
    "url": "img/logo.png",
    "revision": "146e9c40554487bae555f770e606d861"
  },
  {
    "url": "img/photo-1430418372158-66adfd0d88cb.jpg",
    "revision": "0935558121c9b66f671731b1cb9766ad"
  },
  {
    "url": "img/photo-1431440869543-efaf3388c585.jpg",
    "revision": "061f8da0f49ff606e5c4a9db856842e6"
  },
  {
    "url": "img/photo-1466278313810-9aca9abea861.jpg",
    "revision": "c2491c7babf17d81d4a56a681ad4bdae"
  },
  {
    "url": "img/photo-1473042904451-00171c69419d.jpg",
    "revision": "b5120323320511f1c048b84e96aa0946"
  },
  {
    "url": "img/profile.jpg",
    "revision": "1bcabd3306b57ccc416e066644bfa5dd"
  },
  {
    "url": "index.html",
    "revision": "5ffd7bac665149b6197b5025cc7eeb5e"
  },
  {
    "url": "news/update/2017/10/01/setup-fluent-bootstrap.html",
    "revision": "acd10d0b75d77710be550bfefbf4c056"
  },
  {
    "url": "news/update/2017/10/16/added-paralax.html",
    "revision": "00dc5708aab10d908aed0321fa1f8131"
  },
  {
    "url": "page-layout.html",
    "revision": "3715a68365eb1e26ff42e82cf1dfb8f3"
  },
  {
    "url": "pages/page/page-layout.html",
    "revision": "922839eb0bb42c4128f8a9993f993eea"
  },
  {
    "url": "pages/page/page-sidebar.html",
    "revision": "92bb48672859bb438c38664704a1d34b"
  },
  {
    "url": "pages/parallax/paralax-example-basic.html",
    "revision": "36d248de97b07c85ab3b3fb98cceb5e7"
  },
  {
    "url": "pages/parallax/paralax-example-items.html",
    "revision": "8eeff0c409d11f57e2e59261ef3b72db"
  },
  {
    "url": "paralax.html",
    "revision": "829634d3e6b796e0f694b4ac623c0144"
  },
  {
    "url": "profile.html",
    "revision": "df29b0e7a13a6d4c075d6e13ab07e218"
  },
  {
    "url": "service-worker.js",
    "revision": "242705be75a858fade9b9a0f6785b09c"
  },
  {
    "url": "tables.html",
    "revision": "ab2f5912951315c07c6bc228ce0a589a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
