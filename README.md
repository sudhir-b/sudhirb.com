Description de l’image (jointe au ticket)

L’image montre six pinceaux de peinture alignés verticalement sur un fond blanc. De gauche à droite : un pinceau éventail aux poils verts ; un pinceau plat/« langue de chat » teinté de bleu ; un pinceau plat large chargé de peinture rouge ; un pinceau plat biseauté jaune ; un pinceau rond pointu brun ; puis un plus petit pinceau rond pointu brun. Tous ont une virole métallique argentée et un manche noir.

# Site statique Eleventy + MDX + React (via Bun)

Ce dépôt contient un site statique minimaliste qui utilise :

- Eleventy (11ty) comme générateur de site statique
- MDX via `@mdx-js/mdx` (rendu avec React 19 et `react-dom/server`)
- Bun pour exécuter les commandes (via `bunx`)

Le contenu est rédigé en fichiers `.mdx`. Lors de la construction, les pages MDX sont évaluées avec le runtime JSX de React et rendues en HTML statique. La sortie est générée dans le dossier `_site`.

## Prérequis

- Bun installé (recommandé : version 1.x ou plus récente)
- Environnement Node.js compatible ESM (le projet est en `"type": "module"`)

## Installation

Installez les dépendances avec Bun :

```
bun install
```

## Lancer le serveur de développement

Servez le site en mode développement avec Eleventy :

```
bun run serve
```

Ce script exécute la commande suivante (à titre d’information, inchangée) :

```
bunx @11ty/eleventy --serve --formats=mdx
```

Eleventy démarre un serveur local et reconstruit le site à chaque modification des fichiers `.mdx`.

## Build de production

Générez la version statique prête à être déployée dans `_site/` :

```
bun run build
```

Ce script exécute :

```
bunx @11ty/eleventy --formats=mdx
```

## Structure du projet

- `index.mdx` : page d’accueil
- `about/` : page « About »
- `blog/` : index et articles de blog (`.mdx`)
- `til/` : notes « Today I Learned » (`.mdx`)
- `eleventy.config.js` : configuration d’Eleventy (enregistrement de l’extension MDX, collections, passthrough, etc.)
- `package.json` : scripts et dépendances
- `_site/` : dossier de sortie (généré)

## MDX et rendu React

L’extension personnalisée Eleventy déclare le format `.mdx`. Le contenu MDX est évalué via `@mdx-js/mdx` et rendu en HTML statique avec `react-dom/server`. Les composants React peuvent donc être utilisés dans le contenu MDX, mais la sortie finale reste purement statique.

Points clés de la configuration :

- Format de template limité à `mdx` (`templateFormats: ["mdx"]`)
- Évaluation MDX avec le runtime JSX de React
- Deux collections :
  - `posts` : fichiers `blog/**/*.mdx`, triés du plus récent au plus ancien
  - `til` : fichiers `til/**/*.mdx`, triés du plus récent au plus ancien
- Copie passthrough optionnelle pour les actifs statiques (ex. `styles.css`)

## Écrire du contenu

Les fichiers de contenu sont écrits en `.mdx` et peuvent inclure un front‑matter YAML. Exemple minimal :

```
---
title: "Mon article"
date: 2025-01-01
description: "Résumé de l’article"
---

# Mon article

Du contenu en MDX…
```

Placez les articles de blog dans `blog/` et les notes TIL dans `til/`. La page d’index de chaque section liste automatiquement le contenu via les collections définies dans `eleventy.config.js`.

## Déploiement

Le build produit uniquement des fichiers statiques dans `_site/`. Vous pouvez héberger ce dossier sur n’importe quel service de pages statiques (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

## Scripts disponibles

- `bun run serve` : démarre le serveur de développement Eleventy
- `bun run build` : génère le site statique

Les commandes sous‑jacentes (à ne pas modifier) sont :

```
bunx @11ty/eleventy --serve --formats=mdx
bunx @11ty/eleventy --formats=mdx
```

## Licence

Aucune licence explicite n’est fournie dans ce dépôt. Ajoutez‑en une si nécessaire pour votre utilisation.
