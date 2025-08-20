# TIL (Today I Learned)

This directory contains short technical notes and discoveries - quick things I've figured out that might be useful later.

Format borrowed from [Simon Willison's TIL collection](https://github.com/simonw/til).

## Adding a New TIL Entry

1. Create a new `.mdx` file in this directory
2. Use a descriptive filename that reflects what you learned
3. Keep entries short and focused on one specific thing

## Frontmatter Structure

```mdx
---
title: "Brief description of what you learned"
date: "YYYY-MM-DD"
tags: ["category", "technology"]  # optional
---

Quick explanation of the concept, command, or technique.

## Example (if applicable)

```bash
command --example
```

## Notes

- Any additional context
- Links to documentation
- Why this is useful
```

## File Naming Examples

- `git-revert-vs-reset.mdx`
- `css-grid-centering.mdx`
- `javascript-optional-chaining.mdx`
- `docker-cleanup-commands.mdx`
- `eleventy-collection-sorting.mdx`

## Content Guidelines

- **Keep it short**: TIL entries should be concise and focused
- **One concept per entry**: Don't try to cover multiple topics
- **Include practical examples**: Show the actual command, code, or technique
- **Add context**: Briefly explain why this is useful or when you'd use it
- **Link to sources**: Include references to documentation or tutorials

## Example TIL Entry

```mdx
---
title: "Using CSS Grid to center content both horizontally and vertically"
date: "2024-01-20"
tags: ["css", "grid", "layout"]
---

You can center content both horizontally and vertically using CSS Grid with just three properties:

```css
.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
```

The `place-items: center` is a shorthand for:
- `align-items: center` (vertical centering)
- `justify-items: center` (horizontal centering)

This is often simpler than using Flexbox for centering, especially when you don't need the flex container behavior.
```

## Categories

Common categories for TIL entries:
- **Git**: Version control tips and tricks
- **CSS**: Styling techniques and properties
- **JavaScript**: Language features and patterns
- **Command Line**: Terminal commands and shortcuts
- **Development Tools**: IDE tips, build tools, etc.
- **Web APIs**: Browser APIs and their usage
- **Performance**: Optimization techniques
- **Debugging**: Tools and techniques for troubleshooting
