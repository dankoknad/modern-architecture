"use strict";var precacheConfig=[["/modern-architecture/index.html","2d1b1c765506de1df9fd9d97391bcfcc"],["/modern-architecture/static/css/main.6977812a.css","87af6b6906c39c4407db0603631d9c6a"],["/modern-architecture/static/js/main.b0218a6b.js","dd233ac99925ee5db8483f49af316012"],["/modern-architecture/static/media/Roboto-Bold.c0f1e4a4.woff2","c0f1e4a4fdfb8048c72e86aadb2a247d"],["/modern-architecture/static/media/Roboto-Bold.eed9aab5.woff","eed9aab5449cc9c8430d7d258108f602"],["/modern-architecture/static/media/Roboto-Light.3c37aa69.woff2","3c37aa69cd77e6a53a067170fa8fe2e9"],["/modern-architecture/static/media/Roboto-Light.ea36cd9a.woff","ea36cd9a0e9eee97012a67b8a4570d7b"],["/modern-architecture/static/media/Roboto-Medium.1561b424.woff2","1561b424aaef2f704bbd89155b3ce514"],["/modern-architecture/static/media/Roboto-Medium.cf4d60bc.woff","cf4d60bc0b1d4b2314085919a00e1724"],["/modern-architecture/static/media/Roboto-Regular.3cf6adf6.woff","3cf6adf61054c328b1b0ddcd8f9ce24d"],["/modern-architecture/static/media/Roboto-Regular.5136cbe6.woff2","5136cbe62a63604402f2fedb97f246f8"],["/modern-architecture/static/media/Roboto-Thin.1f35e6a1.woff2","1f35e6a11d27d2e10d28946d42332dc5"],["/modern-architecture/static/media/Roboto-Thin.44b78f14.woff","44b78f142603eb69f593ed4002ed7a4a"],["/modern-architecture/static/media/marker.b0313795.svg","b0313795c45dac8bd94fb3ba2c905234"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),e=urlsToCacheKeys.has(r));var n="/modern-architecture/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});