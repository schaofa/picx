if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,d)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=d(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a59a8da5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/about.38626fd2.js",revision:"6520d7a771712076fd4d34dfea14b258"},{url:"assets/about.a5c44f06.css",revision:"0002acd75a1a2c84a7900f3d286de9d9"},{url:"assets/index.83bd3fd5.js",revision:"4025f1fb86310e55033402c491bd2b79"},{url:"assets/index.f4f1f86f.css",revision:"cc4b82921306e83fea5305b6912db1d8"},{url:"assets/register-sw.74361854.js",revision:"8ee730511ab4a41e88d4aca9f4632737"},{url:"assets/vendor.27c8d26d.js",revision:"bb210af88e1d56d9687b07e62cc03bb9"},{url:"assets/vendor.2a4b9907.css",revision:"4a69fbbd03b168b5f71746b88c4afdb8"},{url:"index.html",revision:"95893c238e480fbd53b48c400947adae"},{url:"./logo@192x192.png",revision:"2141830aeff90ef6988f4e01aba62fad"},{url:"./logo@512x512.png",revision:"9cd91af1d1005f1c7d42933c465f0dcc"},{url:"manifest.webmanifest",revision:"6d847755b6ef3df5aff4a353336c2732"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
