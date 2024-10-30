import { renderToStaticMarkup } from "react-dom/server";
import { register } from "node:module";

register("@mdx-js/node-loader", import.meta.url);

export default function (eleventyConfig) {
  eleventyConfig.addExtension("mdx", {
    key: "11ty.js",
    compile: () => {
      return async function (data) {
        let content = await this.defaultRenderer(data);
        return renderToStaticMarkup(content);
      };
    },
  });
}
