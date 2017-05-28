const fs = require("fs");
const pagemap = require("./libs/pagemap");

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  },
  exportPathMap: async () => {
    return await pagemap();
  }
};
