# About Section

This directory contains the about page content for the personal website.

## Structure

- `index.mdx` - Main about page content

## Editing the About Page

The about page uses MDX format, allowing you to combine Markdown with JSX components.

### Current Structure

```mdx
---
title: "About"
---

# About

Brief personal description.

## Work

Professional experience and current role.

## Contact

Links to social media and contact information.
```

### Adding Content

You can enhance the about page by:

1. **Expanding the personal description**:
   - Add more details about your background
   - Include your interests and expertise
   - Mention your location if desired

2. **Work section**:
   - Current job title and company
   - Previous experience highlights
   - Key projects or achievements

3. **Adding new sections**:
   - Skills and technologies
   - Education
   - Speaking engagements
   - Open source contributions

### Example Enhanced Structure

```mdx
---
title: "About"
description: "Learn more about Sudhir Balaji"
---

# About

I'm a software engineer passionate about building modern web applications and sharing knowledge with the developer community.

## Work

Currently working as [Your Role] at [Company Name], focusing on [key areas].

Previously worked at:
- [Previous Company] - [Role] ([Years])
- [Another Company] - [Role] ([Years])

## Skills

- **Frontend**: React, TypeScript, CSS, HTML
- **Backend**: Node.js, Python, APIs
- **Tools**: Git, Docker, AWS, Vercel

## Projects

Some notable projects I've worked on:
- [Project Name] - Brief description
- [Another Project] - Brief description

## Contact

[Twitter](https://x.com/sudbalaji)
[LinkedIn](https://www.linkedin.com/in/sudhirbalaji/)
[GitHub](https://github.com/sudhir-b)
[Email](mailto:me@sudhirb.com)
```

### Using JSX Components

You can add interactive elements or styled components:

```mdx
<div className="skills-grid">
  <div className="skill-item">JavaScript</div>
  <div className="skill-item">React</div>
  <div className="skill-item">Node.js</div>
</div>

<div style={{
  backgroundColor: '#f0f9ff',
  padding: '1rem',
  borderRadius: '8px',
  margin: '1rem 0'
}}>
  💡 <strong>Currently Learning:</strong> Exploring new technologies in AI and machine learning.
</div>
```

## Best Practices

- Keep the content authentic and personal
- Update contact links regularly
- Include a professional photo if desired
- Keep the tone consistent with your personal brand
- Ensure all links work and are up to date
