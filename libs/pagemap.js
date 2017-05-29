const fs = require("fs");
const glob = require("glob");
const remark = require("remark");
const html = require("remark-html");
const recommended = require("remark-preset-lint-recommended");

const content = async file => {
  let markdown = fs.readFileSync(file).toString("utf8");
  return await remark().use(recommended).use(html).process(markdown);
};

const loadToc = cwd => {
  try {
    return require(`${process.cwd()}/${cwd}/toc.json`);
  } catch (e) {
    throw new Error(
      `toc.json shoud be exist in ${cwd} directory\n
      Please see this http://next-note.github.io/`
    );
  }
};

module.exports = async (cwd = "docs") => {
  const routes = {};
  let toc = loadToc(cwd);

  const urls = glob.sync("**/*.md", { cwd: cwd }).forEach(async v => {
    let url = "/" + v.replace(/\.md$/, "").replace(/index$/, "");
    const vfile = await content(`${cwd}/${v}`);

    routes[url] = {
      page: "/",
      query: {
        contents: vfile.contents,
        toc
      }
    };
  });

  return routes;
};
