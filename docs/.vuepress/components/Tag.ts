import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Tag",
  props: {
    tag: {
      type: String,
      required: true,
      default: "#标签",
    },
    bgColor: {
      type: String,
    },
  },
  setup(props) {
    return () =>
      h(
        "div",
        props.bgColor
          ? { class: "vp-tag-item", style: { backgroundColor: props.bgColor } }
          : { class: "vp-tag-item" },
        props.tag
      );
  },
});

// 添加样式
const styles = `
.vp-tag-item {
  display: inline-block;
  padding: 5px 10px;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: var(--tag-text);
  background-color: var(--vp-c-accent); /* 你可以选择任何你喜欢的颜色 */
  border-radius: 12px;
  margin: 5px;
  text-align: center;
  cursor: default;
  transition: background-color 0.3s;
}

.vp-tag-item:hover {
  opacity: 0.8;
  background-color: var(--vp-c-accent); /* 悬停时的背景颜色 */
}
`;

// 将样式插入到页面
const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);
