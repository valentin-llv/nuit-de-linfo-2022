importScripts("/service-worker/workbox-sw.js");

workbox.precaching.precacheAndRoute(injectionPoint);