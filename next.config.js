const fs = require("fs");

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  },
  exportPathMap: () => {
    const routes = {
      "/": {
        page: "/",
        query: { file: "/Users/rhio/Works/my/seed-next-app/docs/index.md" }
      },
      "/help": {
        page: "/",
        query: { file: "/Users/rhio/Works/my/seed-next-app/docs/help.md" }
      },
      "/p/basic/getting-stated": {
        page: "/",
        query: {
          file: "/Users/rhio/Works/my/seed-next-app/docs/basic/getting-started.md"
        }
      },
      "/p/basic/install": {
        page: "/",
        query: {
          file: "/Users/rhio/Works/my/seed-next-app/docs/basic/install.md"
        }
      },
      "/p/advanced/custom-style": {
        page: "/",
        query: {
          file: "/Users/rhio/Works/my/seed-next-app/docs/advanced/custom-style.md"
        }
      },
      "/p/advanced/theme": {
        page: "/",
        query: {
          file: "/Users/rhio/Works/my/seed-next-app/docs/advanced/theme.md"
        }
      }
    };

    Object.keys(routes).map((key, i) => {
      const route = routes[key];
      route.query.markdown = fs.readFileSync(route.query.file).toString("utf8");
      return route;
    });

    return routes;
  }
};

// exports.exportPathMap = () => ({
//   "/": { page: "/" },
//   "/docs/help": { page: "/docs", query: { file: "docs/help.md" } },
//   "/docs/install": { page: "/docs", query: { file: "docs/install.md" } },
//   "/help": { page: "/", query: { file: "docs/help.md" } },
//   "/basic": { page: "/", query: { file: "docs/basic/index.md" } },
//   "/basic/install": { page: "/", query: { file: "docs/basic/install.md" } },
//   "/advance": { page: "/", query: { file: "advance/index.md" } },
//   "/advance/theme": { page: "/", query: { file: "advance/theme.md" } }
// });
