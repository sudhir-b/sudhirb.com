# Personal Site

A static personal site built with Eleventy, run via Bun, and configured to compile MDX content using React's JSX runtime.

## Features

- **Static Site Generation**: Built with Eleventy for fast, static site generation
- **MDX Support**: Content written in MDX format with React components
- **Modern Stack**: Powered by Bun for fast development and builds
- **Organized Content**: Separate sections for blog posts and TIL (Today I Learned) entries

## Project Structure

```
├── about/           # About page content
├── blog/            # Blog posts
├── til/             # Today I Learned entries
├── index.mdx        # Home page
├── eleventy.config.js    # Eleventy configuration
└── package.json    # Dependencies and scripts
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start development server with hot reload
bun run serve
```

### Build

```bash
# Build the static site
bun run build
```

The built site will be output to the `_site` directory.

## Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in the `blog/` directory
2. Add front matter with metadata (title, description, etc.)
3. Write your content in MDX format
4. The post will automatically appear in the blog collection

### Adding TIL Entries

1. Create a new `.mdx` file in the `til/` directory
2. Add front matter with metadata
3. Write your content in MDX format
4. The entry will automatically appear in the TIL collection

## Configuration

The site is configured through `eleventy.config.js`:

- **MDX Support**: Uses `@mdx-js/mdx` with React's JSX runtime
- **Collections**: Automatically creates collections for blog posts and TIL entries
- **Static Assets**: CSS files are copied to the output directory

## Technologies Used

- **Eleventy**: Static site generator
- **Bun**: JavaScript runtime and package manager
- **MDX**: Markdown with JSX support
- **React**: For component rendering in MDX
- **React DOM**: Server-side rendering

## License

This project is open source and available under the [MIT License](LICENSE).