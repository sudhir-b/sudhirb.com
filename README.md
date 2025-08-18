# Site Web Personnel - Sudhir Balaji

Un générateur de site statique moderne construit avec Eleventy, MDX et React pour créer un site web personnel avec blog et section TIL (Today I Learned).

## 🚀 Stack Technologique

- **[Eleventy (11ty)](https://www.11ty.dev/)** - Générateur de site statique rapide et flexible
- **[MDX](https://mdxjs.com/)** - Markdown avec support JSX pour du contenu riche
- **[React](https://react.dev/)** - Composants pour le rendu côté serveur
- **[Bun](https://bun.sh/)** - Runtime et gestionnaire de packages moderne
- **ES Modules** - JavaScript moderne avec support des modules

## 📁 Structure du Projet

```
├── about/               # Page À Propos
├── blog/                # Articles de blog (format MDX)
├── til/                 # Section Today I Learned
├── _site/               # Sortie générée (ignorée par Git)
├── eleventy.config.js   # Configuration Eleventy
├── index.mdx            # Page d'accueil
├── package.json         # Dépendances et scripts
└── styles.css           # Feuilles de style
```

## ✨ Fonctionnalités

- **Génération statique** : Performance optimale avec des pages pré-générées
- **Support MDX** : Écrivez du Markdown enrichi avec des composants React
- **Collections automatiques** : Organisation automatique du contenu blog et TIL
- **Rendu côté serveur** : Composants React rendus statiquement
- **Design responsive** : Interface adaptée à tous les appareils
- **Hot reload** : Rechargement automatique en développement

## 🛠 Installation

### Prérequis

- [Bun](https://bun.sh/) (recommandé) ou Node.js 18+

### Étapes d'installation

1. **Cloner le projet**
   ```bash
   git clone <url-du-repository>
   cd <nom-du-projet>
   ```

2. **Installer les dépendances**
   ```bash
   bun install
   ```

## 🚀 Développement

### Commandes disponibles

- **Développement avec hot reload**
  ```bash
  bun run serve
  ```
  Lance le serveur de développement sur `http://localhost:8080` avec rechargement automatique.

- **Build de production**
  ```bash
  bun run build
  ```
  Génère le site statique dans le dossier `_site/`.

### Workflow de développement

1. **Démarrer le serveur de développement**
   ```bash
   bun run serve
   ```

2. **Créer du contenu**
   - Articles de blog : Créez des fichiers `.mdx` dans `blog/`
   - TIL : Créez des fichiers `.mdx` dans `til/`
   - Pages : Créez des fichiers `.mdx` à la racine ou dans des sous-dossiers

3. **Prévisualiser**
   - Le site se recharge automatiquement à chaque modification
   - Visitez `http://localhost:8080` pour voir les changements

## 📝 Création de Contenu

### Format des fichiers MDX

Tous les contenus utilisent le format MDX (Markdown + JSX) avec frontmatter :

```mdx
---
title: "Titre de l'article"
date: "2024-08-18"
description: "Description de l'article"
---

# Mon Article

Contenu en **Markdown** avec support des composants React.

<div className="highlight">
  Vous pouvez utiliser du JSX directement !
</div>
```

### Articles de Blog

Créez des fichiers `.mdx` dans le dossier `blog/` :

```
blog/
├── mon-premier-article.mdx
├── guide-technique.mdx
└── reflexions.mdx
```

### Entrées TIL (Today I Learned)

Créez des fichiers `.mdx` dans le dossier `til/` pour des notes courtes :

```
til/
├── git-tips.mdx
├── css-tricks.mdx
└── javascript-patterns.mdx
```

## 🏗 Architecture Technique

### Processus de génération

1. **Compilation MDX** : Les fichiers `.mdx` sont compilés avec `@mdx-js/mdx`
2. **Rendu React** : Les composants sont rendus statiquement avec `renderToStaticMarkup`
3. **Collections** : Eleventy crée automatiquement des collections pour blog et TIL
4. **Sortie HTML** : Génération de fichiers HTML statiques optimisés

### Configuration Eleventy

Le fichier `eleventy.config.js` configure :
- Support MDX avec compilation personnalisée
- Collections automatiques pour blog et TIL
- Copie des assets (CSS, images)
- Répertoires d'entrée et de sortie

## 🚢 Déploiement

### Build de production

```bash
bun run build
```

Le site généré se trouve dans `_site/` et peut être déployé sur :

- **Netlify** : Connectez votre repository et configurez la commande `bun run build`
- **Vercel** : Déploiement automatique avec configuration zero
- **GitHub Pages** : Configurez une action GitHub pour build et déployer
- **Serveur statique** : Uploadez le contenu de `_site/` sur votre serveur

### Variables d'environnement

Aucune variable d'environnement requise pour un déploiement basique.

## 🔧 Personnalisation

### Ajout de nouvelles sections

1. Créez un nouveau dossier (ex: `projects/`)
2. Ajoutez une collection dans `eleventy.config.js` :
   ```javascript
   eleventyConfig.addCollection("projects", function(collectionApi) {
     return collectionApi.getFilteredByGlob("projects/**/*.mdx").reverse();
   });
   ```

### Modification du style

- Éditez `styles.css` pour les styles globaux
- Utilisez `className` dans vos composants MDX pour du styling personnalisé

### Ajout de composants React

Créez des composants dans un dossier `components/` et importez-les dans vos fichiers MDX :

```mdx
import { MonComposant } from '../components/MonComposant.js';

<MonComposant prop="valeur" />
```

## 🐛 Dépannage

### Erreurs courantes

- **Module non trouvé** : Vérifiez que toutes les dépendances sont installées avec `bun install`
- **Erreur de compilation MDX** : Vérifiez la syntaxe MDX et fermez correctement les balises JSX
- **Hot reload ne fonctionne pas** : Redémarrez le serveur de développement

### Debug

Pour debugger la compilation :
```bash
bunx @11ty/eleventy --formats=mdx --debug
```

## 📜 Licence

Ce projet est un site personnel. Consultez le propriétaire pour les conditions d'utilisation.

## 🤝 Contribution

Ce projet étant un site personnel, les contributions externes ne sont généralement pas acceptées. Pour des suggestions ou corrections, ouvrez une issue.

---

**Développé avec ❤️ en utilisant les technologies web modernes**
