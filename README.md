# Site Personnel de Sudhir Balaji

Un site web personnel moderne construit avec [Eleventy](https://www.11ty.dev/) et support MDX, propulsé par Bun.

## 🏗️ Stack Technologique

- **[Eleventy (11ty)](https://www.11ty.dev/)** - Générateur de site statique
- **[MDX](https://mdxjs.com/)** - Markdown avec support JSX
- **[React](https://reactjs.org/)** - Runtime JSX pour MDX
- **[Bun](https://bun.sh/)** - Runtime et gestionnaire de packages

## 📁 Structure du Projet

```
├── index.mdx              # Page d'accueil
├── about/                 # Section À propos
│   └── index.mdx         # Page de présentation
├── blog/                  # Section Blog
│   ├── index.mdx         # Index des articles
│   └── *.mdx             # Articles du blog
├── til/                   # Section "Aujourd'hui, j'ai appris"
│   └── *.mdx             # Notes TIL
├── eleventy.config.js     # Configuration Eleventy
├── package.json           # Dépendances et scripts
└── README.md             # Ce fichier
```

## 🚀 Installation et Utilisation

### Prérequis
- [Bun](https://bun.sh/) installé sur votre système

### Installation des Dépendances
```bash
bun install
```

### Développement
```bash
# Démarrer le serveur de développement
bun run serve
# Le site sera disponible sur http://localhost:8080
```

### Build de Production
```bash
# Générer les fichiers statiques
bun run build
# Les fichiers seront générés dans le dossier _site/
```

## ✏️ Contenu

### Pages Principales
- **Accueil** (`index.mdx`) - Page d'accueil avec navigation
- **À propos** (`about/index.mdx`) - Informations personnelles et contact

### Sections de Contenu
- **Blog** (`blog/`) - Articles et publications
- **TIL** (`til/`) - Notes "Aujourd'hui, j'ai appris"

## 🎨 Fonctionnalités

- ✅ Support MDX complet avec React JSX
- ✅ Collections Eleventy automatiques pour blog et TIL
- ✅ Navigation inter-sections
- ✅ Templates flexibles
- ✅ Build statique optimisé

## 📝 Ajout de Contenu

### Créer un Article de Blog
1. Ajouter un fichier `.mdx` dans le dossier `blog/`
2. Le fichier sera automatiquement inclus dans la collection `posts`

### Créer une Note TIL
1. Ajouter un fichier `.mdx` dans le dossier `til/`
2. Le fichier sera automatiquement inclus dans la collection `til`

### Configuration des Pages
Chaque page peut avoir un front matter avec :
```yaml
---
title: "Titre de la Page"
description: "Description de la page"
---
```

## 🔧 Configuration

La configuration Eleventy se trouve dans `eleventy.config.js` :
- Support MDX avec React runtime
- Collections automatiques pour blog et TIL
- Configuration des dossiers d'entrée et de sortie

## 📞 Contact

- **Email** : [me@sudhirb.com](mailto:me@sudhirb.com)
- **Twitter** : [@sudbalaji](https://x.com/sudbalaji)
- **LinkedIn** : [sudhirbalaji](https://www.linkedin.com/in/sudhirbalaji/)
- **GitHub** : [sudhir-b](https://github.com/sudhir-b)

---

*Construit avec ❤️ en utilisant Eleventy et MDX*