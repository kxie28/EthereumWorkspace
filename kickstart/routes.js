const routes = require("next-routes")();

// the ":" indicates that the following will be a wildcard
routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show");

module.exports = routes;
