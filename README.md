# Personal Site

A static personal website built with [Eleventy](https://www.11ty.dev/) and powered by [Bun](https://bun.sh/), featuring MDX content compilation with React's JSX runtime.

## Features

- 🚀 **Eleventy Static Site Generator** - Fast, flexible static site generation
- 📝 **MDX Support** - Write content in MDX with full React component support
- ⚡ **Bun Runtime** - Lightning-fast JavaScript runtime and package manager
- 📚 **Collections** - Organized blog posts and TIL (Today I Learned) entries
- 🎨 **Component-based** - Uses React's JSX runtime for rich content

## Project Structure

```
.
├── about/              # About page
├── blog/               # Blog posts (MDX files)
├── til/                # Today I Learned entries (MDX files)
├── index.mdx           # Homepage
├── eleventy.config.js  # Eleventy configuration
└── package.json        # Project dependencies and scripts
```

## Prerequisites

- [Bun](https://bun.sh/) - Install from https://bun.sh/

## Getting Started

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Start the development server:**
   ```bash
   bun run serve
   ```
   
   The site will be available at `http://localhost:8080` with live reloading.

3. **Build for production:**
   ```bash
   bun run build
   ```
   
   The static site will be generated in the `_site` directory.

## Scripts

- `bun run serve` - Start development server with live reload
- `bun run build` - Build static site for production

## Adding Content

### Blog Posts

Create new `.mdx` files in the `blog/` directory:

```mdx
---
title: "Your Post Title"
date: 2024-01-01
---

# Your Post Title

Your content here...
```

### TIL Entries

Create new `.mdx` files in the `til/` directory with the same format.

## Technologies

- **[Eleventy](https://www.11ty.dev/)** - Static site generator
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support
- **[React](https://react.dev/)** - JSX runtime for rendering
- **[Bun](https://bun.sh/)** - JavaScript runtime and package manager

## Configuration

The Eleventy configuration (`eleventy.config.js`) includes:

- Custom MDX compilation using `@mdx-js/mdx` and React's JSX runtime
- Collections for blog posts and TIL entries
- Static markup rendering via `react-dom/server`

## License

MIT
