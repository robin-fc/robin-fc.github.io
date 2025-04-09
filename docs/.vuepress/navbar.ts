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
    text: "学习",
    prefix: "/学习",
    icon: "fa6-solid:calendar",
    children: [
      {
        text: "产品",
        prefix: "产品",
        children: [
          {
            text: "产品学习路线图",
            link: "产品学习路线图",
          },
          {
            text: "如何成为一个好的产品",
            link: "如何成为一个好的产品",
          },
        ],
      },
      {
        text: "算法",
        link: "/学习/算法/README.md",
      },
      {
        text: "设计模式",
        link: "/学习/设计模式/README.md",
      },
    ],
  },
  {
    text: "工作",
    icon: "fa6-solid:pen",
    link: "/工作/README.md",
    children: [
      {
        text: "技术",
        link: "/工作/技术/README.md",
      },
      {
        text: "随感",
        link: "/工作/随感/README.md",
      },
      {
        text: "项目",
        link: "/工作/项目/README.md",
      },
      {
        text: "面试",
        link: "/工作/面试/README.md",
      },
    ],
  },
  {
    text: "生活",
    icon: "fa6-solid:strawberry",
    prefix: "/生活",
    children: [
      {
        text: "拾慧",
        icon: "fa6-solid:grill-hot",
        prefix: "拾慧",
        children: [
          {
            text: "人间清醒",
            link: "人间清醒",
          },
        ],
      },
      {
        text: "悟饭",
        icon: "fa6-solid:grill-hot",
        prefix: "悟饭",
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
      {
        text: "经验",
        icon: "fa6-solid:grill-hot",
        prefix: "经验",
        children: [
          {
            text: "生活妙招",
            link: "生活妙招",
          },
          {
            text: "省钱技巧",
            link: "省钱技巧",
          },
        ],
      },
    ],
  },
  {
    text: "行路",
    icon: "fa6-solid:map",
    prefix: "/行路",
    children: [
      {
        text: "安徽",
        link: "安徽",
      },
      {
        text: "北京",
        link: "北京",
      },
      {
        text: "成都",
        link: "成都",
      },
      {
        text: "大理",
        link: "大理",
      },
      {
        text: "广州",
        link: "广州",
      },
      {
        text: "南京",
        link: "南京",
      },
      {
        text: "上海",
        link: "上海",
      },
      {
        text: "深圳",
        link: "深圳",
      },
      {
        text: "武汉",
        link: "武汉",
      },
      {
        text: "无锡",
        link: "无锡",
      },
      {
        text: "苏州",
        link: "苏州",
      },
      {
        text: "珠海",
        link: "珠海",
      },
      {
        text: "香港",
        link: "香港",
      },
    ],
  },
]);
