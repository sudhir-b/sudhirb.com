# Blog

Dieses Verzeichnis enthält Blog-Beiträge für die persönliche Website.

## Einen neuen Blog-Beitrag hinzufügen

1. Erstelle eine neue `.mdx`-Datei in diesem Verzeichnis
2. Verwende die folgende Frontmatter-Struktur:

```mdx
---
title: "Dein Blog-Beitragstitel"
date: "YYYY-MM-DD"
description: "Kurze Beschreibung des Beitrags"
tags: ["tag1", "tag2"]  # optional
---

# Dein Blog-Beitragstitel

Dein Inhalt kommt hier hin. Du kannst Standard-Markdown-Syntax und JSX-Komponenten verwenden.

## Unterüberschrift

Mehr Inhalt...
```

## Dateinamen-Konventionen

Verwende beschreibende Dateinamen mit Bindestrichen für Leerzeichen:
- `mein-erster-blog-beitrag.mdx`
- `react-hooks-lernen.mdx`
- `web-performance-tipps.mdx`

## Inhalts-Richtlinien

- Verwende klare, beschreibende Titel
- Füge eine kurze Beschreibung im Frontmatter hinzu
- Füge relevante Tags für die Kategorisierung hinzu
- Verwende eine ordnungsgemäße Überschriften-Hierarchie (beginne mit H1)
- Füge Code-Beispiele hinzu, wo angemessen

## Verfügbare Features

- **Markdown**: Standard-Markdown-Syntax
- **JSX-Komponenten**: Bette React-Komponenten direkt ein
- **Code-Hervorhebung**: Verwende umzäunte Code-Blöcke mit Sprachspezifikation
- **Frontmatter**: YAML-Metadaten für Beitragsinformationen

## Beispielstruktur

```mdx
---
title: "Erste Schritte mit Eleventy und MDX"
date: "2024-01-15"
description: "Ein umfassender Leitfaden zum Erstellen statischer Websites mit Eleventy und MDX"
tags: ["eleventy", "mdx", "static-sites"]
---

# Erste Schritte mit Eleventy und MDX

In diesem Beitrag erkunden wir, wie man moderne statische Websites mit Eleventy und MDX erstellt.

## Was ist Eleventy?

Eleventy ist ein einfacherer Static Site Generator...

## Was ist MDX?

MDX ermöglicht es dir, JSX in deinem Markdown-Inhalt zu verwenden...

## Deine erste Website erstellen

Beginnen wir mit der Einrichtung eines grundlegenden Projekts:

```bash
npm create eleventy-project my-site
cd my-site
npm install
```

<div style={{backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px'}}>
  Dies ist eine benutzerdefinierte JSX-Komponente innerhalb des Blog-Beitrags!
</div>

## Fazit

Eleventy und MDX bieten eine mächtige Kombination für die Erstellung moderner statischer Websites.
```
