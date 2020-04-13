'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "31b24bbb3cb808499e534f3acc83999e",
"/": "31b24bbb3cb808499e534f3acc83999e",
"main.dart.js": "084844f3b112cb13b5f12b72ec00ab24",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "458125abb3eee3a5956676720d21f8f1",
".git/config": "49d363bbffbf29155ef03a230f81091c",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/93/4a9232ba61eac59a88cbffe655b36e2ad26930": "a197827ebd70c6575f185f6797a332ce",
".git/objects/94/9a7ae767c902b2b7dc732d7609928e842e1c49": "eee178c1f2482bf8b14e606f0f099e46",
".git/objects/33/c911a306c59d6f97e742e9ecae83d1581f97c7": "78949ab60ec6e56b5c60f171fae54303",
".git/objects/02/0363b390624d3d8e579b4bd6a7bf3d5b99895b": "e1754c644ca474414e3e3d9a21195c56",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/97/ccb04746d7c57cbe8a43324ded157a54ea56b0": "9a69709d7a4f23066b11bb04ac0171f4",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/fa/6e23a5ca35138d3808ad890cac4df9830a63ef": "be6809203ed8aac37ec28f67797356fa",
".git/objects/79/10d31e676d02be8e05b70a312e4cfd0ac4c171": "234ab9236235c5003f5b18ea141ad6c4",
".git/objects/84/f4bb4e9d7d843783907513371c42fca5589536": "c391d12f86d706b7463d1b383f7cd76a",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/82/44dc78dfc2663b218af93cddbc60a25bef8450": "7a79ff1089555d663f07dd9c1743eca8",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5d54a185e0080ff2fb1302d2d90aaad",
".git/logs/refs/heads/master": "e5d54a185e0080ff2fb1302d2d90aaad",
".git/logs/refs/remotes/chp/master": "346bee1a7db659dc65046270d77968a9",
".git/logs/refs/remotes/jacohend/master": "6330b4bd4b6c98a7b506261dbd4fdd64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "bfd02413fa400a0a20497883d53f61be",
".git/refs/remotes/chp/master": "bfd02413fa400a0a20497883d53f61be",
".git/refs/remotes/jacohend/master": "bfd02413fa400a0a20497883d53f61be",
".git/index": "c804169576e46bafcede4777252356b3",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/LICENSE": "fdd0942e6a6d94ab6c3abe1c3294de81",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
