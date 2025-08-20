# Blog

This directory contains blog posts for the personal website.

## Adding a New Blog Post

1. Create a new `.mdx` file in this directory
2. Use the following frontmatter structure:

```mdx
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
description: "Brief description of the post"
tags: ["tag1", "tag2"]  # optional
---

# Your Blog Post Title

Your content goes here. You can use standard Markdown syntax and JSX components.

## Subheading

More content...
```

## File Naming Convention

Use descriptive filenames with dashes for spaces:
- `my-first-blog-post.mdx`
- `learning-react-hooks.mdx`
- `web-performance-tips.mdx`

## Content Guidelines

- Use clear, descriptive titles
- Include a brief description in the frontmatter
- Add relevant tags for categorization
- Use proper heading hierarchy (start with H1)
- Include code examples where appropriate

## Available Features

- **Markdown**: Standard Markdown syntax
- **JSX Components**: Embed React components directly
- **Code Highlighting**: Use fenced code blocks with language specification
- **Frontmatter**: YAML metadata for post information

## Example Structure

```mdx
---
title: "Getting Started with Eleventy and MDX"
date: "2024-01-15"
description: "A comprehensive guide to building static sites with Eleventy and MDX"
tags: ["eleventy", "mdx", "static-sites"]
---

# Getting Started with Eleventy and MDX

In this post, we'll explore how to build modern static sites using Eleventy and MDX.

## What is Eleventy?

Eleventy is a simpler static site generator...

## What is MDX?

MDX allows you to use JSX in your Markdown content...

## Building Your First Site

Let's start by setting up a basic project:

```bash
npm create eleventy-project my-site
cd my-site
npm install
```

<div style={{backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px'}}>
  This is a custom JSX component within the blog post!
</div>

## Conclusion

Eleventy and MDX provide a powerful combination for building modern static sites.
```
