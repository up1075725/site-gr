                        importScripts("/site-gr/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/site-gr/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/site-gr/index.html","revision":"285e7f04dec66f334228a2ca582da43b"},{"url":"/site-gr/posts/2018/05/22/eurenitikes-kat/","revision":"5ccefa0b32cb12cae5173413272fe0fc"},{"url":"/site-gr/posts/2018/05/15/theseis-ergasias/","revision":"c881705ad7d43670e78538d296c6444b"},{"url":"/site-gr/posts/2018/05/11/pr-eksetastikis/","revision":"5d9e6179121c55906888cc66c0e405b6"},{"url":"/site-gr/posts/2017/04/27/kan-didaktorikon/","revision":"76af81c349c69e3569d512e3236b24db"},{"url":"/site-gr/posts/2017/03/19/math-diagonismos/","revision":"c3af6bf0cae7ea1715ab5820c3742b04"}];
            // service-worker.js

// set names for both precache & runtime cache
 
workbox.core.setCacheNameDetails({
    prefix: 'ioniodi',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

 // let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

 // let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

 // use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

 // use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

 // third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
); 
