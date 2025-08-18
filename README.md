# Site Web Personnel de Sudhir Balaji

Un site web personnel et blog construit comme un générateur de sites statiques utilisant des technologies web modernes.

## Description du Projet

Ce projet est un site web personnel et blog développé avec [Eleventy (11ty)](https://www.11ty.dev/), un générateur de sites statiques moderne. Il présente une architecture propre et minimale conçue pour une création et maintenance de contenu faciles. Le site inclut une page d'accueil personnelle, une section blog pour des articles de fond, une section TIL (Today I Learned) pour des notes techniques courtes, et une page à propos avec des informations personnelles.

## Détails Techniques

### Stack Technologique

- **Eleventy (11ty)** : Générateur de sites statiques avec support MDX
- **React** et **React DOM** : Pour le rendu côté serveur des composants
- **Node.js** : Avec modules ES pour un JavaScript moderne
- **Bun** : Gestionnaire de paquets et runtime
- **MDX** : Markdown avec JSX pour la création de contenu riche

### Technologies Clés

- **Génération de sites statiques** : Traite les fichiers MDX en HTML
- **Rendu côté serveur** : Utilise `renderToStaticMarkup` de React pour générer du HTML statique
- **Support MDX** : Permet l'intégration de composants JSX dans le contenu Markdown
- **Organisation basée sur les collections** : Gestion automatique des articles de blog et des entrées TIL
- **Modules ES** : Utilise la syntaxe import/export moderne

## Structure du Contenu

Le projet est organisé avec une structure de répertoires claire :

```
/
├── blog/           # Articles de blog (format long)
├── til/            # Today I Learned (notes techniques courtes)
├── about/          # Page à propos avec informations personnelles
├── index.mdx       # Page d'accueil avec hero et navigation
├── eleventy.config.js  # Configuration Eleventy
├── package.json    # Dépendances et scripts
└── _site/          # Sortie générée (ignoré par git)
```

### Sections de Contenu

1. **Blog** : Section pour des articles de fond et des réflexions plus longues
2. **TIL (Today I Learned)** : Notes techniques courtes et découvertes quotidiennes
3. **À Propos** : Informations personnelles et liens vers les réseaux sociaux
4. **Accueil** : Page d'accueil avec section hero et navigation vers les différentes sections

### Format de Contenu

Tous les contenus sont écrits en **MDX**, permettant :
- Syntaxe Markdown standard pour le formatage du texte
- Composants React intégrés pour des éléments interactifs
- Métadonnées frontmatter pour titre, description et autres propriétés

## Instructions de Développement et de Construction

### Prérequis

- [Bun](https://bun.sh/) installé sur votre système
- Node.js (compatible avec les modules ES)

### Installation

```bash
# Cloner le dépôt
git clone <url-du-dépôt>
cd <nom-du-projet>

# Installer les dépendances avec Bun
bun install
```

### Scripts de Développement

```bash
# Construire le site statique
bun run build

# Lancer le serveur de développement avec rechargement automatique
bun run serve
```

### Commandes Disponibles

- `bun run build` : Génère le site statique dans le répertoire `_site/`
- `bun run serve` : Lance un serveur de développement local avec rechargement automatique

### Ajout de Contenu

#### Créer un Nouvel Article de Blog

1. Créer un nouveau fichier `.mdx` dans le répertoire `blog/`
2. Ajouter les métadonnées frontmatter :
   ```mdx
   ---
   title: "Titre de l'Article"
   date: 2024-01-01
   description: "Description de l'article"
   ---
   
   Contenu de votre article ici...
   ```

#### Créer une Nouvelle Entrée TIL

1. Créer un nouveau fichier `.mdx` dans le répertoire `til/`
2. Utiliser le même format frontmatter que pour les articles de blog
3. Garder le contenu court et concis

## Aperçu de l'Architecture

### Processus de Génération de Sites Statiques

1. **Traitement MDX** : Eleventy traite les fichiers `.mdx` en utilisant `@mdx-js/mdx`
2. **Rendu des Composants** : Les composants React sont rendus côté serveur avec `renderToStaticMarkup`
3. **Collections Automatiques** : 
   - Collection `posts` : Tous les fichiers `blog/**/*.mdx` triés par date décroissante
   - Collection `til` : Tous les fichiers `til/**/*.mdx` triés par date décroissante
4. **Génération HTML** : Sortie HTML statique dans le répertoire `_site/`

### Flux de Configuration Eleventy

```javascript
// eleventy.config.js structure simplifiée
export default function (eleventyConfig) {
  // Support MDX avec React
  eleventyConfig.addExtension("mdx", { ... });
  
  // Collections pour l'organisation du contenu
  eleventyConfig.addCollection("posts", ...);
  eleventyConfig.addCollection("til", ...);
  
  // Configuration des répertoires
  return {
    dir: { input: ".", output: "_site" },
    templateFormats: ["mdx"]
  };
}
```

### Avantages de l'Architecture

- **Performance** : HTML statique pré-généré pour un chargement rapide
- **Sécurité** : Pas de base de données ou de code côté serveur à maintenir
- **Flexibilité** : Support MDX permet des composants riches dans le contenu
- **Évolutivité** : Facilement déployable sur des CDN et services d'hébergement statique
- **Maintenance** : Structure simple et claire pour la gestion du contenu

## Déploiement

Le site génère du HTML statique dans le répertoire `_site/` qui peut être déployé sur n'importe quel service d'hébergement web statique comme :

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Ou tout serveur web traditionnel

## Licence

Ce projet est un site web personnel. Voir le dépôt pour les détails de licence.
