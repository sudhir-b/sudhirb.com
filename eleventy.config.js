import { pathToFileURL } from "node:url";
import { evaluate } from "@mdx-js/mdx";
import { renderToStaticMarkup } from "react-dom/server";
import * as runtime from "react/jsx-runtime";

export default function (eleventyConfig) {
  // MDX support
  eleventyConfig.addExtension("mdx", {
    compile: async (str, inputPath) => {
      const { default: mdxContent } = await evaluate(str, {
        ...runtime,
        baseUrl: pathToFileURL(inputPath),
      });

      return async function (data) {
        let res = await mdxContent(data);
        return renderToStaticMarkup(res);
      };
    },
  });

  // Collections for blog and TIL
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/**/*.mdx").reverse();
  });

  eleventyConfig.addCollection("til", function(collectionApi) {
    return collectionApi.getFilteredByGlob("til/**/*.mdx").reverse();
  });

  // Copy CSS file to output
  eleventyConfig.addPassthroughCopy("styles.css");

  // Directory configuration
  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes",
      output: "_site"
    },
    templateFormats: ["mdx"],
    markdownTemplateEngine: false,
    htmlTemplateEngine: false
  };
}
