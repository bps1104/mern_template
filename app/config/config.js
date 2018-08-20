// path: app/config/config.js
// usage: to choose which config file to load depending on $NODE_ENV

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod") {
  module.exports = require("./config_prod");
} else {
  module.exports = require("./config_dev");
}
