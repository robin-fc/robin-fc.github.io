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
