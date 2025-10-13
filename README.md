# Sudhir Balaji — Personal Site

[Lire ce fichier en français](./README.fr.md)

This repository contains the source code for Sudhir Balaji's personal website. The site is generated with Eleventy while every page is authored in MDX and rendered through React 19 server-side components. The build pipeline runs entirely on Bun, producing a fully static output that can be deployed on any static hosting provider.

## Tech stack

- [Bun](https://bun.sh/) for dependency management and running project scripts.
- [Eleventy](https://www.11ty.dev/) executed through `bunx @11ty/eleventy` to create the static site.
- [MDX](https://mdxjs.com/) evaluated via `@mdx-js/mdx` and rendered with React 19.
- Static HTML output written to the `_site/` directory.

## Prerequisites

- [Bun](https://bun.sh/) 1.1 or newer installed locally. If you need it, run:

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

## Installation

Install JavaScript dependencies with Bun:

```bash
bun install
```

## Development

Start the Eleventy development server with:

```bash
bun run serve
```

Eleventy watches the MDX files and rebuilds automatically. The local preview is available on [http://localhost:8080](http://localhost:8080) by default.

## Production build

Generate the production-ready site with:

```bash
bun run build
```

The compiled site is written to the `_site/` directory. Deploy the contents of `_site/` to your static hosting platform of choice.

## Content structure

- `index.mdx` – Home page with the hero section and primary navigation.
- `about/index.mdx` – About page with profile and contact links.
- `blog/` – Blog posts authored in MDX. Each file should include front matter fields such as `title`, `date`, `description`, and optional `tags`.
- `til/` – "Today I Learned" entries stored as lightweight MDX files.

## Adding new content

1. Create a new `.mdx` file in either the `blog/` or `til/` directory.
2. Populate the front matter at the top of the file. For blog posts you should include `title`, `date`, `description`, and `tags`.
3. Write your content in MDX. Components from React can be used directly inside the Markdown.
4. Run `bun run serve` to preview the changes locally.

## Styling

If you add a `styles.css` file to the project root, Eleventy will passthrough-copy it to the output directory so the styles are available in production.

## Deployment

1. Run `bun run build` to produce the static output in `_site/`.
2. Upload the contents of `_site/` to your hosting provider (e.g., Netlify, Vercel, GitHub Pages, or any static file host).

That's it! Feel free to adapt the content and styling to fit your needs.
