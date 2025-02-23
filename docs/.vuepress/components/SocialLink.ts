import type { VNode } from "vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "SocialLink",

  setup() {
    return (): VNode => h("div", { class: "vp-nav-item vp-action" });
  },
});
