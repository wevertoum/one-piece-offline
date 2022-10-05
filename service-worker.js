import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";

clientsClaim();

const WB_MANIFEST = self.__WB_MANIFEST;
WB_MANIFEST.push({
  url: "/fallback",
  revision: "1234567890",
});
precacheAndRoute(WB_MANIFEST);

self.addEventListener("install", (event) => {
  console.log("pegou meu worker e funfou");
});

self.skipWaiting();
