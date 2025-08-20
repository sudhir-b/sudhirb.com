# Sudhir Balaji - Personal Website

A modern static site generator built with [Eleventy](https://11ty.dev) and [MDX](https://mdxjs.com), featuring a personal homepage, blog, and TIL (Today I Learned) sections.

## Features

- **Static Site Generation**: Built with Eleventy for fast, optimized static sites
- **MDX Support**: Write content in Markdown with embedded React components
- **Blog Section**: Personal blog posts and articles
- **TIL Section**: Short technical notes and discoveries
- **About Page**: Personal information and social media links
- **Responsive Design**: Card-based layout optimized for all devices
- **Server-Side Rendering**: React components rendered to static markup

## Tech Stack

- **[Eleventy](https://11ty.dev)** - Static site generator
- **[MDX](https://mdxjs.com)** - Markdown with JSX support
- **[React](https://react.dev)** - Component library for enhanced content
- **[Bun](https://bun.sh)** - Fast package manager and JavaScript runtime
- **Node.js** with ES modules

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sudhirb-website
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

### Development

Start the development server with hot reload:

```bash
bun run serve
```

The site will be available at `http://localhost:8080`

### Building

Generate the static site for production:

```bash
bun run build
```

The generated site will be in the `_site/` directory.

## Project Structure

```
.
├── about/              # About page content
├── blog/               # Blog posts (MDX files)
├── til/                # Today I Learned entries (MDX files)
├── eleventy.config.js  # Eleventy configuration
├── index.mdx           # Homepage
├── package.json        # Project dependencies and scripts
└── _site/              # Generated static site (ignored by git)
```

## Content Creation

### Writing Blog Posts

Create new MDX files in the `blog/` directory:

```mdx
---
title: "Your Post Title"
date: "2024-01-01"
description: "Brief description of the post"
---

# Your Content Here

You can use **Markdown** and <strong>JSX components</strong> together!
```

### Writing TIL Entries

Create new MDX files in the `til/` directory:

```mdx
---
title: "Something I Learned"
date: "2024-01-01"
---

Quick technical notes and discoveries go here.
```

## Configuration

The site is configured through `eleventy.config.js`:

- **MDX Processing**: Converts MDX files to HTML using React server-side rendering
- **Collections**: Automatically generates collections for blog posts and TIL entries
- **Output Directory**: Static files are generated to `_site/`

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Netlify**: Connect your git repository and set build command to `bun run build`
- **Vercel**: Similar setup with `bun run build` as build command
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static hosting**: Upload the contents of `_site/` directory

## Contributing

This is a personal website, but feel free to:

- Report issues or bugs
- Suggest improvements
- Use this as a template for your own site

## License

This project is open source and available under the [MIT License](LICENSE).
