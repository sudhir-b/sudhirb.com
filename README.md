# Personal Site

A static personal website built with [Eleventy](https://www.11ty.dev/), [MDX](https://mdxjs.com/), and [React](https://react.dev/), powered by [Bun](https://bun.sh/).

## Features

- **MDX Support**: Write content with Markdown and JSX components
- **Static Site Generation**: Fast, SEO-friendly static HTML output
- **React JSX Runtime**: Use React components within your content
- **Collections**: Organized blog posts and TIL (Today I Learned) entries
- **Modern Tooling**: Built with Bun for fast package management and execution

## Tech Stack

- **Eleventy**: Static site generator
- **MDX**: Markdown with JSX support
- **React**: Component library and JSX runtime
- **Bun**: JavaScript runtime and package manager

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
bun install
```

### Development

Start the development server with live reload:

```bash
bun run serve
```

This will start a local server (typically at `http://localhost:8080`) and watch for file changes.

### Build

Generate the static site:

```bash
bun run build
```

The built site will be output to the `_site` directory.

## Project Structure

```
.
├── about/              # About page content
│   └── index.mdx
├── blog/               # Blog posts and index
│   ├── index.mdx
│   └── *.mdx          # Individual blog posts
├── til/                # Today I Learned entries
│   └── index.mdx
├── index.mdx           # Home page
├── eleventy.config.js  # Eleventy configuration
├── package.json        # Dependencies and scripts
└── _site/              # Generated site output (gitignored)
```

## Content Organization

### Home Page

The main landing page (`index.mdx`) serves as the entry point with navigation to other sections.

### Blog Posts

Blog posts are stored in the `blog/` directory as MDX files. They are automatically collected and made available through the `posts` collection in reverse chronological order.

### TIL (Today I Learned)

TIL entries are stored in the `til/` directory as MDX files and organized through the `til` collection.

### About Page

The about page provides personal information and contact links.

## Configuration

The site is configured through `eleventy.config.js`, which:

- Registers MDX as a template language
- Compiles MDX using React's JSX runtime
- Defines collections for blog posts and TIL entries
- Configures the output directory and template formats

## MDX Usage

MDX files can include frontmatter and JSX components:

```mdx
---
title: "My Post Title"
description: "Post description"
---

# Hello World

This is regular Markdown content.

<div className="custom-component">
  And this is JSX!
</div>
```

## License

[Add your license here]

## Author

Sudhir Balaji

- [Twitter](https://x.com/sudbalaji)
- [LinkedIn](https://www.linkedin.com/in/sudhirbalaji/)
- [GitHub](https://github.com/sudhir-b)
- [Email](mailto:me@sudhirb.com)
