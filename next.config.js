const withPwa = require("next-pwa");

module.exports = withPwa({
  dest: "public",
  // disabled: process.env.NODE_ENV === "development",
  disable: false,
  swSrc: "service-worker.js",
});
