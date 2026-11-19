import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";
import vm from "node:vm";
import { reactive, readonly, shallowRef, computed } from "vue";

const require = createRequire(import.meta.resolve("vuepress-theme-hope"));
const { blogPlugin } = await import(
  pathToFileURL(require.resolve("@vuepress/plugin-blog")).href
);
const root = await mkdtemp(path.join(process.cwd(), ".blog-hmr-check-"));
const watchers = [];
const writes = [];
const page = (name) => ({
  path: `/${name}.html`,
  pathLocale: "/",
  filePathRelative: `${name}.md`,
  frontmatter: { tag: ["个人网站"] },
});
const app = {
  env: { isDev: true, isDebug: false },
  dir: { temp: () => root },
  siteData: { locales: {} },
  pages: [page("first")],
  async writeTemp(file, content) {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, file), content);
    writes.push(file);
  },
};
const plugin = blogPlugin({
  hotReload: true,
  excerpt: false,
  category: [
    {
      key: "tag",
      getter: (item) => item.frontmatter.tag,
      path: false,
      itemPath: false,
    },
  ],
  type: [{ key: "article", path: false }],
})(app);
const readExport = async (file, key, context = {}) => {
  const code = (await readFile(path.join(root, file), "utf8"))
    .replace(/^import .*;$/gm, "")
    .replace(/export (const|let) /g, "$1 ")
    .replaceAll("import.meta", "importMeta");
  return vm.runInNewContext(`${code}\n${key}`, {
    reactive: (value) => value,
    importMeta: {},
    ...context,
  });
};
try {
  await mkdir(path.join(root, "pages"));
  await plugin.onInitialized();
  await plugin.onPrepared();
  await plugin.onWatched(app, watchers);
  await Promise.all(
    watchers.map(
      (watcher) => new Promise((resolve) => watcher.once("ready", resolve)),
    ),
  );
  writes.length = 0;
  app.pages.push(page("new-article"));
  await writeFile(path.join(root, "pages/new-article.js"), "// new article");
  let store;
  for (let attempt = 0; attempt < 100; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    store = await readExport("blog/store.js", "store");
    if (store.length === 2 && writes.includes("blog/type.js")) break;
  }
  assert.equal(store[1], "/new-article.html");
  const categories = await readExport("blog/category.js", "categoriesMap");
  const types = await readExport("blog/type.js", "typesMap");
  for (const index of categories.tag["/"].map["个人网站"].indexes)
    assert.equal(typeof store[index], "string");
  for (const index of types.article["/"].indexes)
    assert.equal(typeof store[index], "string");
  assert.ok(
    writes.indexOf("blog/store.js") < writes.indexOf("blog/category.js"),
  );
  const previousStore = ["/first.html"];
  let dispose;
  const updated = await readExport("blog/store.js", "store", {
    importMeta: {
      webpackHot: {
        data: { store: previousStore },
        dispose: (callback) => {
          dispose = callback;
        },
        accept() {},
      },
    },
  });
  assert.equal(updated, previousStore);
  assert.equal(previousStore[1], "/new-article.html");
  const data = {};
  dispose(data);
  assert.equal(data.store, previousStore);
  const clientPath = path.resolve(
    path.dirname(require.resolve("@vuepress/plugin-blog")),
    "../client/index.js",
  );
  const clientCode = (await readFile(clientPath, "utf8"))
    .replace(/import\{[^;]+;/g, "")
    .replace(/export\{[^;]+;/g, "")
    .replaceAll("import.meta", "importMeta");
  const paths = reactive(["/first.html"]);
  const model = vm.runInNewContext(
    `${clientCode}\n({ category: C('tag'), type: k('article') })`,
    {
      M: categories,
      d: types,
      l: paths,
      c: readonly,
      g: shallowRef,
      h: computed,
      T: () => ({ value: { path: "/" } }),
      E: () => ({ value: {} }),
      f: () => ({ value: "/" }),
      y: (route) => {
        assert.equal(typeof route, "string");
        return { path: route, meta: { _blog: {} } };
      },
      __VUEPRESS_DEV__: false,
      __BLOG_META_SCOPE__: "_blog",
      importMeta: {},
    },
  );
  assert.equal(model.category.value.map["个人网站"].items.length, 1);
  assert.equal(model.type.value.items.length, 1);
  paths.push("/new-article.html");
  assert.equal(model.category.value.map["个人网站"].items.length, 2);
  assert.equal(model.type.value.items.length, 2);
  console.log(
    "通过：新增文章同步索引；Webpack HMR 保留引用；索引先到达时不崩溃，路径到达后自动补全。",
  );
} finally {
  await Promise.all(watchers.map((watcher) => watcher.close()));
  await rm(root, { recursive: true, force: true });
}
