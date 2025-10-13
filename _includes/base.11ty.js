const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/til/", label: "TIL" },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default function baseLayout(data) {
  const pageTitle = data.title ? `${data.title} · Sudhir Balaji` : "Sudhir Balaji";
  const description = data.description || "Software engineer writing about building thoughtful tools.";
  const currentUrl = data.page?.url;

  const navigation = navLinks
    .map((link) => {
      const isActive =
        currentUrl === link.href ||
        (link.href !== "/" && currentUrl?.startsWith(link.href));
      const ariaCurrent = isActive ? ' aria-current="page"' : "";
      const activeClass = isActive ? " is-active" : "";
      return `<a class="site-nav__link${activeClass}" href="${link.href}"${ariaCurrent}>${link.label}</a>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="page-wrapper">
    <header class="site-header">
      <div class="site-header-inner">
        <a class="site-logo" href="/">Sudhir Balaji</a>
        <nav class="site-nav" aria-label="Primary navigation">
          ${navigation}
        </nav>
      </div>
    </header>

    <main class="site-main" id="main" tabindex="-1">
      ${data.content}
    </main>

    <footer class="site-footer">
      <p>&copy; ${new Date().getFullYear()} Sudhir Balaji. Built with Eleventy and MDX.</p>
    </footer>
  </div>
</body>
</html>`;
}
