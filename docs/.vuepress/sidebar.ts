import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    {
      text: "🔡 代码编程",
      icon: "",
      prefix: "/code/",
      collapsible: true,
      children: [
        "README.md",
        {
          text: "Basic",
          icon: "fa6-solid:cube",
          collapsible: true,
          children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
        },
        {
          text: "FrondEnd",
          icon: "fa6-solid:object-group",
          collapsible: true,
          children: ["Vue.md", "HTML.md", "Javascript.md", "Python.md"],
        },
      ],
    },
    {
      text: "🛖 生活记录",
      icon: "",
      prefix: "/family/",
      collapsible: true,
      children: "structure",
    },
    // {
    //   text: "加密目录",
    //   icon: "material-symbols:encrypted",
    //   prefix: "/encrypt/",
    //   collapsible: true,
    //   children: "structure",
    // },
  ],
  // 专题区（独立侧边栏）
  "/apps/topic/": "structure",
});
