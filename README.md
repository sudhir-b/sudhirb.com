# Sudhir Balaji — Personal Site

This repository contains the source for [Sudhir Balaji](https://sudhirb.com)'s personal website. It is a static site generated with [Eleventy](https://www.11ty.dev/) that renders MDX content through React 19 server components. The build is orchestrated with [Bun](https://bun.sh/), which handles dependency management and executes the Eleventy CLI.

## Tech stack

- **Eleventy** for static site generation
- **MDX + React 19** for authoring rich, component-driven content
- **Bun** for package management and running build/serve scripts

## Getting started

### Prerequisites

- [Bun](https://bun.sh) 1.1 or newer installed locally

### Installation

Install project dependencies:

```bash
bun install
```

### Local development

Start Eleventy in watch/serve mode:

```bash
bun run serve
```

The development server runs on [http://localhost:8080](http://localhost:8080) by default and automatically rebuilds when content changes.

### Production build

Generate the static site:

```bash
bun run build
```

The compiled HTML, CSS, and assets are emitted to the `_site/` directory. Deploy the contents of `_site/` to any static hosting provider (e.g., Netlify, Vercel, GitHub Pages).

## Project structure

```
/home/engine/project
├── index.mdx             # Landing page
├── about/                # About page content
├── blog/                 # Blog index + individual posts
├── til/                  # "Today I Learned" entries
├── eleventy.config.js    # Eleventy configuration & MDX runtime wiring
├── package.json          # Scripts and dependencies
└── bun.lockb             # Bun lockfile
```

All site pages are authored in MDX. The Eleventy configuration registers a custom extension that evaluates MDX files with `@mdx-js/mdx` and `react-dom/server`, enabling React components inside content files.

## Writing content

- **Home page**: `index.mdx`
- **About page**: `about/index.mdx`
- **Blog posts**: add new `.mdx` files inside `blog/` with front matter:
  ```mdx
  ---
  title: "Post title"
  date: 2025-01-01
  description: "One-line summary"
  tags: ["tag-one", "tag-two"]
  ---
  ```
- **TIL entries**: create short notes in `til/` using MDX.

Eleventy collections are defined for blog posts (`blog/**/*.mdx`) and TIL entries (`til/**/*.mdx`), so new files automatically appear on their respective listing pages after a rebuild.

## Deployment

1. Run `bun run build`.
2. Upload the contents of `_site/` to your hosting provider.
3. Configure the host to serve `_site/` as a static site (no server-side runtime is required).

That’s it—enjoy publishing with Eleventy, MDX, and React!
