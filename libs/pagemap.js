const readdir = require("recursive-readdir");
const path = require("path");
const fs = require("fs");
const pkg = require("../package.json");
const toc = require("../docs/toc.json");
const remark = require("remark");
const html = require("remark-html");
const recommended = require("remark-preset-lint-recommended");

module.exports = async (rootDir = "docs", ignore = []) => {
  const baseDir = path.join(process.cwd(), rootDir);
  const sLen = baseDir.length;
  const _files = await readdir(baseDir, ignore);
  const routes = {};

  _files.filter(file => file.lastIndexOf(".md") > -1).map(async file => {
    let markdown = fs.readFileSync(file).toString("utf8");
    const note = await remark().use(recommended).use(html).process(markdown);

    let route = file.slice(sLen, file.length - 3);
    const matches = /(\/index)$/g.exec(route);

    if (matches !== null) {
      route = route.slice(0, matches.index + 1);
    }

    routes[`${route}`] = {
      page: "/",
      query: {
        contents: note.contents,
        toc: toc
      }
    };
  });

  return routes;
};
