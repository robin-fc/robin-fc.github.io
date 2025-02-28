import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  { text: "主页", icon: "fa6-solid:blog", link: "" },
  {
    text: "FC的世界",
    icon: "fa6-solid:face-smile",
    link: "/profile.md",
  },
  {
    text: "学习计划",
    prefix: "/计划",
    icon: "fa6-solid:calendar",
    children: [
      {
        text: "产品",
        prefix: "/产品/",
        children: [
          {
            text: "如何成为一个好的产品",
            link: "如何成为一个好的产品",
          },
        ],
      },
      {
        text: "算法",
        prefix: "/计划/算法/",
        children: [
          {
            text: "概述",
            link: "README.md",
          },
        ],
      },
      {
        text: "大前端",
        prefix: "/计划/大前端/",
        children: [
          {
            text: "概述",
            link: "README.md",
          },
        ],
      },
      {
        text: "面试",
        prefix: "/计划/面试/",
        children: [
          {
            text: "Web前端面试",
            link: "Web前端面试.md",
          },
        ],
      },
      {
        text: "项目",
        prefix: "/项目",
        children: [
          {
            text: "基于autoGen的一些自动化尝试",
            link: "基于autoGen的一些自动化尝试",
          },
        ],
      },
    ],
  },
  {
    text: "工作",
    icon: "fa6-solid:pen",
    link: "/工作/README.md",
  },
  {
    text: "生活",
    icon: "fa6-solid:strawberry",
    prefix: "/生活",
    children: [
      {
        text: "生活妙招",
        link: "生活妙招",
      },
      {
        text: "省钱技巧",
        link: "省钱技巧",
      },
      {
        text: "悟饭",
        icon: "fa6-solid:grill-hot",
        prefix: "/悟饭",
        children: [
          {
            text: "FC家的菜谱",
            link: "FC家的菜谱.md",
          },
          {
            text: "FC家的甜品",
            link: "FC家的甜品.md",
          },
          {
            text: "FC家的饮料",
            link: "FC家的饮料.md",
          },
        ],
      },
    ],
  },
  {
    text: "行路",
    icon: "fa6-solid:eye",
    prefix: "/行路",
    children: [
      {
        text: "无锡",
        link: "无锡",
      },
      {
        text: "上海",
        link: "上海",
      },
      {
        text: "大理",
        link: "大理",
      },
      {
        text: "成都",
        link: "成都",
      },
      {
        text: "武汉",
        link: "武汉",
      },
      {
        text: "湖北",
        link: "湖北",
      },
      {
        text: "苏州",
        link: "苏州",
      },
    ],
  },
]);
