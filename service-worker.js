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

importScripts("/walletconnect-tokenproof-test/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/walletconnect-tokenproof-test/workbox-v3.6.3"});

importScripts(
  "/walletconnect-tokenproof-test/precache-manifest.e8608b5084284cafeae7b6e650ef61a6.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/walletconnect-tokenproof-test/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});