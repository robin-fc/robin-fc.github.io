import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";

const source = new URL("../docs/reading/", import.meta.url);

if (existsSync(source)) {
  await cp(
    source,
    new URL("../docs/.vuepress/public/reading/", import.meta.url),
    {
      recursive: true,
    },
  );
}
