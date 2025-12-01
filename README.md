# Personal Site

A modern static personal website built with Eleventy, Bun, and MDX, featuring blog posts and TIL (Today I Learned) entries.

## Features

- **MDX Support**: Write content using MDX with full React JSX runtime support
- **Static Site Generation**: Built with Eleventy (11ty) for fast, optimized static pages
- **Bun Runtime**: Leverages Bun for fast builds and development
- **Collections**: Organized blog posts and TIL entries with automatic collection management
- **Responsive Navigation**: Easy navigation between home, about, blog, and TIL sections

## Tech Stack

- [Eleventy](https://www.11ty.dev/) - Static site generator
- [Bun](https://bun.sh/) - JavaScript runtime and package manager
- [MDX](https://mdxjs.com/) - Markdown with JSX support
- [React](https://react.dev/) - JSX runtime for MDX compilation
- React DOM - Server-side rendering

## Project Structure

```
.
├── about/              # About page
├── blog/               # Blog posts (MDX files)
├── til/                # Today I Learned entries (MDX files)
├── index.mdx           # Home page
├── eleventy.config.js  # Eleventy configuration
└── package.json        # Dependencies and scripts
```

## Prerequisites

- [Bun](https://bun.sh/) installed on your system

## Installation

Install dependencies using Bun:

```bash
bun install
```

## Usage

### Development

Start the development server with live reload:

```bash
bun run serve
```

The site will be available at `http://localhost:8080` (default Eleventy port).

### Build

Generate the static site:

```bash
bun run build
```

The built site will be output to the `_site` directory.

## Content Management

### Adding Blog Posts

Create a new MDX file in the `blog/` directory:

```mdx
---
title: "Your Post Title"
date: 2024-01-01
---

# Your Post Title

Your content here...
```

### Adding TIL Entries

Create a new MDX file in the `til/` directory with similar frontmatter.

### MDX Features

You can use React components and JSX directly in your MDX files:

```mdx
<div className="custom-class">
  <h2>Styled Content</h2>
  <p>Mix Markdown and JSX seamlessly!</p>
</div>
```

## Configuration

The Eleventy configuration (`eleventy.config.js`) includes:

- Custom MDX compilation with React JSX runtime
- Collections for blog posts and TIL entries
- Static markup rendering via React DOM
- Output directory set to `_site`

## License

This is a personal website project.
