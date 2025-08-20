# Sudhir Balaji - Persönliche Website

Ein moderner Static Site Generator, entwickelt mit [Eleventy](https://11ty.dev) und [MDX](https://mdxjs.com), mit einer persönlichen Homepage, Blog- und TIL-Bereichen (Today I Learned - Heute Gelernt).

## Funktionen

- **Statische Website-Generierung**: Entwickelt mit Eleventy für schnelle, optimierte statische Websites
- **MDX-Unterstützung**: Verfasse Inhalte in Markdown mit eingebetteten React-Komponenten
- **Blog-Bereich**: Persönliche Blog-Beiträge und Artikel
- **TIL-Bereich**: Kurze technische Notizen und Entdeckungen
- **Über-Seite**: Persönliche Informationen und Social Media Links
- **Responsive Design**: Kartenbasiertes Layout, optimiert für alle Geräte
- **Server-Side Rendering**: React-Komponenten werden zu statischem Markup gerendert

## Technologie-Stack

- **[Eleventy](https://11ty.dev)** - Static Site Generator
- **[MDX](https://mdxjs.com)** - Markdown mit JSX-Unterstützung
- **[React](https://react.dev)** - Komponenten-Bibliothek für erweiterte Inhalte
- **[Bun](https://bun.sh)** - Schneller Package Manager und JavaScript Runtime
- **Node.js** mit ES-Modulen

## Erste Schritte

### Voraussetzungen

- [Bun](https://bun.sh) (empfohlen) oder Node.js 18+

### Installation

1. Repository klonen:
   ```bash
   git clone <repository-url>
   cd sudhirb-website
   ```

2. Abhängigkeiten installieren:
   ```bash
   bun install
   ```

### Entwicklung

Entwicklungsserver mit Hot Reload starten:

```bash
bun run serve
```

Die Website ist dann unter `http://localhost:8080` verfügbar.

### Erstellung (Building)

Statische Website für Produktion generieren:

```bash
bun run build
```

Die generierte Website befindet sich im `_site/`-Verzeichnis.

## Projektstruktur

```
.
├── about/              # Über-Seite Inhalte
├── blog/               # Blog-Beiträge (MDX-Dateien)
├── til/                # Today I Learned Einträge (MDX-Dateien)
├── eleventy.config.js  # Eleventy-Konfiguration
├── index.mdx           # Homepage
├── package.json        # Projektabhängigkeiten und Skripte
└── _site/              # Generierte statische Website (von git ignoriert)
```

## Inhaltserstellung

### Blog-Beiträge schreiben

Erstelle neue MDX-Dateien im `blog/`-Verzeichnis:

```mdx
---
title: "Dein Beitragstitel"
date: "2024-01-01"
description: "Kurze Beschreibung des Beitrags"
---

# Dein Inhalt hier

Du kannst **Markdown** und <strong>JSX-Komponenten</strong> zusammen verwenden!
```

### TIL-Einträge schreiben

Erstelle neue MDX-Dateien im `til/`-Verzeichnis:

```mdx
---
title: "Etwas, das ich gelernt habe"
date: "2024-01-01"
---

Schnelle technische Notizen und Entdeckungen kommen hier hin.
```

## Konfiguration

Die Website wird über `eleventy.config.js` konfiguriert:

- **MDX-Verarbeitung**: Konvertiert MDX-Dateien zu HTML mithilfe von React Server-Side Rendering
- **Collections**: Generiert automatisch Collections für Blog-Beiträge und TIL-Einträge
- **Ausgabeverzeichnis**: Statische Dateien werden in `_site/` generiert

## Deployment (Bereitstellung)

Dies ist eine statische Website, die auf jedem Static Hosting Service bereitgestellt werden kann:

- **Netlify**: Git-Repository verbinden und Build-Befehl auf `bun run build` setzen
- **Vercel**: Ähnliche Einrichtung mit `bun run build` als Build-Befehl
- **GitHub Pages**: GitHub Actions zum Erstellen und Bereitstellen verwenden
- **Jedes Static Hosting**: Inhalte des `_site/`-Verzeichnisses hochladen

## Mitwirken

Dies ist eine persönliche Website, aber du kannst gerne:

- Probleme oder Bugs melden
- Verbesserungen vorschlagen
- Dies als Vorlage für deine eigene Website verwenden

## Lizenz

Dieses Projekt ist Open Source und verfügbar unter der [MIT License](LICENSE).
