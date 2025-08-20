# TIL (Today I Learned - Heute Gelernt)

Dieses Verzeichnis enthält kurze technische Notizen und Entdeckungen - schnelle Dinge, die ich herausgefunden habe und die später nützlich sein könnten.

Format übernommen von [Simon Willisons TIL-Sammlung](https://github.com/simonw/til).

## Einen neuen TIL-Eintrag hinzufügen

1. Erstelle eine neue `.mdx`-Datei in diesem Verzeichnis
2. Verwende einen beschreibenden Dateinamen, der widerspiegelt, was du gelernt hast
3. Halte Einträge kurz und fokussiert auf eine spezifische Sache

## Frontmatter-Struktur

```mdx
---
title: "Kurze Beschreibung dessen, was du gelernt hast"
date: "YYYY-MM-DD"
tags: ["kategorie", "technologie"]  # optional
---

Schnelle Erklärung des Konzepts, Befehls oder der Technik.

## Beispiel (falls zutreffend)

```bash
command --example
```

## Notizen

- Jeder zusätzliche Kontext
- Links zur Dokumentation
- Warum das nützlich ist
```

## Beispiele für Dateinamen

- `git-revert-vs-reset.mdx`
- `css-grid-zentrierung.mdx`
- `javascript-optional-chaining.mdx`
- `docker-aufräum-befehle.mdx`
- `eleventy-collection-sortierung.mdx`

## Inhalts-Richtlinien

- **Halte es kurz**: TIL-Einträge sollten prägnant und fokussiert sein
- **Ein Konzept pro Eintrag**: Versuche nicht, mehrere Themen abzudecken
- **Füge praktische Beispiele hinzu**: Zeige den tatsächlichen Befehl, Code oder die Technik
- **Füge Kontext hinzu**: Erkläre kurz, warum das nützlich ist oder wann du es verwenden würdest
- **Verlinke zu Quellen**: Füge Referenzen zu Dokumentation oder Tutorials hinzu

## Beispiel TIL-Eintrag

```mdx
---
title: "CSS Grid verwenden, um Inhalte sowohl horizontal als auch vertikal zu zentrieren"
date: "2024-01-20"
tags: ["css", "grid", "layout"]
---

Du kannst Inhalte sowohl horizontal als auch vertikal mit CSS Grid zentrieren, indem du nur drei Eigenschaften verwendest:

```css
.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
```

Das `place-items: center` ist eine Kurzschreibweise für:
- `align-items: center` (vertikale Zentrierung)
- `justify-items: center` (horizontale Zentrierung)

Das ist oft einfacher als Flexbox für die Zentrierung zu verwenden, besonders wenn du das Flex-Container-Verhalten nicht benötigst.
```

## Kategorien

Häufige Kategorien für TIL-Einträge:
- **Git**: Versionskontroll-Tipps und -Tricks
- **CSS**: Styling-Techniken und Eigenschaften
- **JavaScript**: Sprachfeatures und Patterns
- **Command Line**: Terminal-Befehle und Shortcuts
- **Development Tools**: IDE-Tipps, Build-Tools, etc.
- **Web APIs**: Browser-APIs und ihre Verwendung
- **Performance**: Optimierungstechniken
- **Debugging**: Tools und Techniken zur Fehlerbehebung
