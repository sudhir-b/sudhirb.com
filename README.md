# Eleventy + Bun + MDX + React 19 static site

A minimal static personal site powered by Eleventy (11ty) with Bun as the runtime. All pages are authored in MDX and rendered via React 19 server components on the server during the Eleventy build using a small custom Eleventy extension.

- Content directories: `about/`, `blog/`, `til/`, and a root-level `index.mdx` (home page)
- Collections: blog posts are collected from `blog/**/*.mdx` and TIL entries from `til/**/*.mdx`
- Output directory: `_site/`
- Passthrough assets: `styles.css` at the repo root is copied as-is to the output

## Architecture overview

- Eleventy drives the static build. Custom integration in `eleventy.config.js` adds an `mdx` template engine via `@mdx-js/mdx`.
- The custom extension evaluates MDX using `evaluate` from `@mdx-js/mdx` with the React 19 JSX runtime, and renders to HTML using `react-dom/server`'s `renderToStaticMarkup`.
- MDX files (pages and posts) can use React components and JSX. At build time, Eleventy evaluates the MDX and emits static HTML.
- Collections are defined for:
  - `posts`: all `blog/**/*.mdx` files
  - `til`: all `til/**/*.mdx` files
- `styles.css` is explicitly passthrough-copied to `_site` so it can be linked by pages.

Relevant code (see `eleventy.config.js`):

```js
import { pathToFileURL } from "node:url";
import { evaluate } from "@mdx-js/mdx";
import { renderToStaticMarkup } from "react-dom/server";
import * as runtime from "react/jsx-runtime";

export default function (eleventyConfig) {
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

  eleventyConfig.addCollection("posts", (api) => api.getFilteredByGlob("blog/**/*.mdx").reverse());
  eleventyConfig.addCollection("til", (api) => api.getFilteredByGlob("til/**/*.mdx").reverse());

  eleventyConfig.addPassthroughCopy("styles.css");

  return { dir: { input: ".", output: "_site" }, templateFormats: ["mdx"] };
}
```

## Tech stack

- Eleventy (11ty)
- Bun (runtime + bunx for running CLIs)
- React 19 and `react-dom/server` (server-rendered components to static HTML)
- `@mdx-js/mdx` (MDX evaluation)
- Custom Eleventy + MDX integration (see `eleventy.config.js`)

## Prerequisites

- Bun 1.x installed (https://bun.sh). If an `engines` field is added in `package.json`, prefer that version; none is required at present.

## Setup

- Install dependencies:
  - `bun install`
- Environment variables:
  - None required for local development or build.

## Local development

Use the exact dev command defined in `package.json`:

- `bun run dev`

This runs Eleventy in serve mode so you can iterate locally. A corresponding `serve` alias is also available:

- `bun run serve`

## Build

Create a production build:

- `bun run build`

The static site is emitted to the `_site/` directory.

## Authoring content (MDX)

Place MDX files in these locations:

- Home page: `index.mdx` at the repo root
- About page: `about/index.mdx`
- Blog:
  - Index page: `blog/index.mdx`
  - Posts: `blog/<my-post>.mdx` (collected into the `posts` collection)
- TIL:
  - Index page: `til/index.mdx`
  - Entries: `til/<my-til>.mdx` (collected into the `til` collection)

Frontmatter fields supported by Eleventy data cascade and used as metadata in this project:

- `title` (string)
- `date` (YYYY-MM-DD or full ISO string)
- `description` (string)
- `tags` (array of strings)
- `published` (boolean, optional; set to `false` to exclude from listings you build)

Minimal example for a blog post:

```mdx
---
title: "My First Post"
date: 2025-01-15
description: "Short description"
tags: ["example", "hello"]
published: true
---

# My First Post

Welcome to my blog! You can write JSX here too.
```

### Assets and styling

- Global stylesheet: place `styles.css` at the repo root. It is passthrough-copied to `_site/styles.css` via `eleventy.config.js`.
- Images and other assets:
  - You can reference images with relative paths from your MDX files.
  - If you add additional asset directories, add passthrough copy rules in `eleventy.config.js`, e.g.:

    ```js
    eleventyConfig.addPassthroughCopy({ "public": "/" });
    // or for a specific pattern:
    eleventyConfig.addPassthroughCopy("blog/**/*.{png,jpg,svg}");
    ```

## Project structure

```text
.
├─ eleventy.config.js
├─ index.mdx                 # Home page
├─ about/
│  └─ index.mdx
├─ blog/
│  ├─ index.mdx             # Blog index
│  └─ <post>.mdx            # Blog posts (collected as `posts`)
├─ til/
│  ├─ index.mdx             # TIL index
│  └─ <entry>.mdx           # TIL entries (collected as `til`)
├─ styles.css               # Passthrough-copied to _site/
├─ package.json
├─ bun.lockb
└─ _site/                   # Build output (generated)
```

## Deployment

This is a static site. Common hosting options:

- Netlify: Build command `bun run build`, publish directory `_site`.
- Vercel: Configure a static build with command `bun run build`, output directory `_site`.
- GitHub Pages: Build in CI and publish the `_site` directory as the site artifact.

## License and author

- License: TBD
- Author: Sudhir Balaji — https://sudhirb.com
  - Twitter: https://x.com/sudbalaji
  - LinkedIn: https://www.linkedin.com/in/sudhirbalaji/
  - GitHub: https://github.com/sudhir-b
  - Email: me@sudhirb.com
