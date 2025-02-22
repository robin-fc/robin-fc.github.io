import SocialLink from "./components/SocialLink.ts";
import { defineClientConfig } from "vuepress/client";
import TagList from "./components/TagList.ts";
import Tag from "./components/Tag.ts";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
    app.component("TagList", TagList);
    app.component("Tag", Tag);
  },
});
