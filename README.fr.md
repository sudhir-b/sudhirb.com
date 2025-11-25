# Site Personnel Statique

Un site personnel statique construit avec **Eleventy**, exécuté via **Bun**, et configuré pour compiler du contenu **MDX** en utilisant le runtime JSX de React.

## Caractéristiques

- ⚡ **Eleventy** - Générateur de site statique ultra-rapide
- 🦫 **Bun** - Runtime JavaScript très performant
- 📝 **MDX** - Markdown + JSX pour un contenu riche et interactif
- ⚛️ **React** - Composants React avec JSX runtime
- 📦 **Pas de dépendances lourdes** - Configuration minimale et légère

## Structure du Projet

```
.
├── index.mdx              # Page d'accueil
├── about/
│   └── index.mdx          # Page À propos
├── blog/
│   ├── index.mdx          # Index du blog
│   └── *.mdx              # Articles du blog
├── til/
│   └── index.mdx          # Index des "Today I Learned"
├── package.json           # Configuration npm/bun
├── eleventy.config.js     # Configuration Eleventy
└── _site/                 # Dossier de sortie (généré)
```

### Contenu

- **Page d'accueil** (`index.mdx`) - Présentation du site avec navigation vers les sections principales
- **À propos** (`about/`) - Information personnelle et profil
- **Blog** (`blog/`) - Articles de blog avec exemple d'article sur les outils bash pour les agents de codage
- **TIL** (`til/`) - Section "Today I Learned" pour partager des petits apprentissages quotidiens

## Installation

Assurez-vous que vous avez **Bun** installé. Si ce n'est pas le cas :

```bash
curl -fsSL https://bun.sh/install | bash
```

Puis installez les dépendances :

```bash
bun install
```

## Utilisation

### Mode développement avec rechargement en direct

```bash
bun serve
```

Le site sera accessible à `http://localhost:8080` par défaut.

### Construire le site pour la production

```bash
bun build
```

Cela génère le site statique dans le dossier `_site/`.

## Configuration

### Eleventy (`eleventy.config.js`)

- **Extension MDX** - Support natif des fichiers `.mdx`
- **Collections** :
  - `posts` - Articles du blog triés par ordre inverse
  - `til` - Entrées TIL triées par ordre inverse
- **Sortie** - Le site généré est placé dans `_site/`

### Structure des fichiers MDX

Les fichiers MDX utilisent le frontmatter YAML pour les métadonnées :

```mdx
---
title: "Titre de la page"
description: "Description courte"
---

# Contenu MDX avec JSX

Vous pouvez utiliser du HTML/JSX directement :

<div className="exemple">
  <p>Du contenu React</p>
</div>
```

## Dépendances

- `@11ty/eleventy` - Générateur de site statique
- `@mdx-js/mdx` - Compilateur MDX
- `react` - Bibliothèque React
- `react-dom` - Rendu React côté serveur

## Développement

### Ajouter un nouvel article de blog

1. Créez un fichier `.mdx` dans le dossier `blog/`
2. Incluez le frontmatter avec `title` et `description`
3. Écrivez votre contenu en MDX/Markdown

Exemple :
```mdx
---
title: "Mon nouvel article"
description: "Une description intéressante"
---

# Mon nouvel article

Contenu de l'article ici...
```

### Ajouter une nouvelle entrée TIL

Suivez le même processus que pour les articles de blog, mais placez le fichier dans le dossier `til/`.

## Scripts NPM

- `bun build` - Construire le site statique
- `bun serve` - Démarrer le serveur de développement avec rechargement en direct

## Licence

À définir selon vos préférences.

## Contact

Consultez la page [À propos](./about/) pour plus d'informations.
