import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  { text: "主页", icon: "fa6-solid:blog", link: "" },
  // {
  //   text: "应用",
  //   icon: "fa6-solid:bars-staggered",
  //   prefix: "/",
  //   children: [
  //     "apps/Applist",
  //     {
  //       text: "常用扩展",
  //       icon: "fa6-brands:chrome",
  //       link: "apps/Chrome",
  //     },
  // {
  //   text: "服务/专题",
  //   icon: "",
  //   prefix: "",
  //   children: [
  //     {
  //       text: "专题示例",
  //       icon: "fa6-solid:dice-d20",
  //       link: "apps/topic/",
  //     },
  //   ],
  // },
  //   ],
  // },
  // {
  //   text: "生活",
  //   icon: "fa6-solid:bed-pulse",
  //   prefix: "/family/",
  //   children: ["Life"],
  // },
  {
    text: "FC的世界",
    icon: "discover",
    prefix: "/",
    children: [
      { text: "关于FC", icon: "fa6-solid:bed-pulse", link: "/profile.md" },
      { text: "生活经验", icon: "fa6-solid:bed-pulse", link: "/life-tips/" },
      {
        text: "生活体验",
        icon: "fa6-solid:bed-pulse",
        prefix: "/life/",
        children: [
          { text: "无锡", icon: "fa6-solid:bed-pulse", link: "/无锡.md" },
          { text: "上海", icon: "fa6-solid:bed-pulse", link: "/上海.md" },
          { text: "苏州", icon: "fa6-solid:bed-pulse", link: "/苏州.md" },
          { text: "武汉", icon: "fa6-solid:bed-pulse", link: "/武汉.md" },
          { text: "大理", icon: "fa6-solid:bed-pulse", link: "/大理.md" },
          { text: "成都", icon: "fa6-solid:bed-pulse", link: "/成都.md" },
        ],
      },
      {
        text: "关于厨师",
        icon: "fa6-solid:bed-pulse",
        prefix: "/cook/",
        children: [
          {
            text: "FC家的菜谱",
            icon: "fa6-solid:bed-pulse",
            link: "FC家的菜谱.md",
          },
          {
            text: "FC家的甜品",
            icon: "fa6-solid:bed-pulse",
            link: "FC家的甜品.md",
          },
          {
            text: "FC家的饮料",
            icon: "fa6-solid:bed-pulse",
            link: "FC家的饮料.md",
          },
        ],
      },
    ],
  },
  {
    text: "项目",
    icon: "fa6-solid:bed-pulse",
    prefix: "/项目相关",
    children: [
      {
        text: "个人主页及博客",
        icon: "fa6-solid:bed-pulse",
        link: "个人主页及博客",
      },
      {
        text: "AI项目相关",
        icon: "fa6-solid:bed-pulse",
        link: "AI项目/我用AI做些什么",
      },
    ],
  },
  {
    text: "技术",
    icon: "fa6-solid:bed-pulse",
    prefix: "/关于技术",
    children: [
      {
        text: "题解",
        icon: "fa6-solid:bed-pulse",
        prefix: "/LeetCode题解",
        children: [
          {
            text: "LeetCode题解",
            icon: "fa6-solid:bed-pulse",
            link: "/LeetCode题解",
          },
        ],
      },
      {
        text: "算法",
        icon: "fa6-solid:bed-pulse",
        prefix: "/算法",
        children: [
          { text: "图论整理", icon: "fa6-solid:bed-pulse", link: "/图论整理" },
        ],
      },
      {
        text: "前端",
        icon: "fa6-solid:bed-pulse",
        prefix: "/前端",
        children: [
          { text: "前端基础", icon: "fa6-solid:bed-pulse", link: "/前端基础" },
          { text: "常用框架", icon: "fa6-solid:bed-pulse", link: "/常用框架" },
          { text: "UI 相关", icon: "fa6-solid:bed-pulse", link: "/UI 相关" },
        ],
      },
    ],
  },
]);
