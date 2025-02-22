import { defineComponent, h } from "vue";
import Tag from "./Tag.ts";

export default defineComponent({
  name: "TagList",
  props: {
    label: {
      type: String,
      required: true,
    },
    tags: {
      type: Array as () => string[],
      required: true,
    },
    bgColor: {
      type: String,
    },
  },
  setup(props) {
    return () =>
      h("div", { class: "frs-center" }, [
        props.label &&
          h(
            "span",
            { style: "width: 90px;text-align: right;margin-right: 16px" },
            props.label
          ),
        h(
          "div",
          { class: "vp-tags" },
          props.tags.map((tag) => h(Tag, { tag, bgColor: props.bgColor }))
        ),
      ]);
  },
});
