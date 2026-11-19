# FC 的博客

本仓库用于构建并部署我的个人博客（VuePress 2 + vuepress-theme-hope）。

## 本地运行

使用 Node.js 20.19.0 或更新版本，以及 pnpm 10.34.9（与 CI 一致）。

安装依赖时请保留并提交 `pnpm-lock.yaml`，CI 将按锁文件安装。

依赖维护说明：

- 未启用数学公式，正文也未使用 VidStack，因此移除了 `mathjax-full`、`vidstack` 及播放器流媒体依赖，同时移除了播放器注册和样式。
- 旧主题及 Sass 调色板中的弃用 `if()` 语法通过 `patches/` 下的 pnpm 持久补丁修复。补丁与 `package.json`、`pnpm-lock.yaml` 需一起提交，重新安装会自动应用。
- 博客插件补丁修复新增文章时路径表与标签索引不同步导致的路由异常，并保留热更新时的响应式路径表引用；运行 `pnpm test:blog-hmr` 可验证，CI 构建前也会执行该检查。
- 静态读书资料通过 `pnpm docs:copy-reading` 使用 Node 内置 API 复制，替代 `cpx2`。
- Mermaid 升级到主题要求的 11.x；移除重复安装的 Markdown 增强插件，并限定旧主题内部的 helper 版本，避免宽松预发布版本范围拉取不兼容的新 VuePress 工具。
- `sockjs` 仅使用 UUID 的 `v4()` API，限定覆盖为仍提供 CommonJS 接口的 `uuid@11.1.0`。
- Cheerio 的编码依赖限定覆盖为 `encoding-sniffer@1.0.2`，以移除 `whatwg-encoding`；保留其使用的 `decodeBuffer` 和 `DecodeStream` 接口。这也是最低 Node 版本要求的来源。上游发布兼容更新后可移除此覆盖。

```bash
pnpm i
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

## 致谢与许可

- 本项目基于 LearnData 模板二次开发：[rockbenben/LearnData](https://github.com/rockbenben/LearnData)
- LearnData 代码许可：MIT © rockbenben
- 本站文章版权与转载规则以站点页脚声明为准（当前配置为 CC BY-NC-ND 4.0）
