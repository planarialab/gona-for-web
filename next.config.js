module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  },
  exportPathMap: () => ({
    "/": {
      page: "/",
      query: { file: "/Users/rhio/Works/my/seed-next-app/docs/index.md" }
    },
    "/help": {
      page: "/",
      query: { file: "/Users/rhio/Works/my/seed-next-app/docs/help.md" }
    },
    "/basic": {
      page: "/",
      query: { file: "/Users/rhio/Works/my/seed-next-app/docs/basic/index.md" }
    },
    "/basic/install": {
      page: "/",
      query: {
        file: "/Users/rhio/Works/my/seed-next-app/docs/basic/install.md"
      }
    },
    "/advance": {
      page: "/",
      query: {
        file: "/Users/rhio/Works/my/seed-next-app/docs/advance/index.md"
      }
    },
    "/advance/theme": {
      page: "/",
      query: {
        file: "/Users/rhio/Works/my/seed-next-app/docs/advance/theme.md"
      }
    }
  })
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
