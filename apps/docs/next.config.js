const withTM = require("next-transpile-modules")(["@crypto-marketplace/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
