# Sudhir Balaji — Site personnel

[Lire ce fichier en anglais](./README.md)

Ce dépôt contient le code source du site personnel de Sudhir Balaji. Le site est généré avec Eleventy, chaque page est écrite en MDX et rendue au moyen de composants serveur React 19. La chaîne de build repose entièrement sur Bun et produit une sortie statique qui peut être déployée sur n'importe quel hébergeur de fichiers statiques.

## Pile technique

- [Bun](https://bun.sh/) pour la gestion des dépendances et l'exécution des scripts du projet.
- [Eleventy](https://www.11ty.dev/) lancé via `bunx @11ty/eleventy` pour générer le site statique.
- [MDX](https://mdxjs.com/) évalué grâce à `@mdx-js/mdx` et rendu avec React 19.
- Sortie HTML statique écrite dans le dossier `_site/`.

## Prérequis

- [Bun](https://bun.sh/) 1.1 ou version ultérieure installé localement. Si nécessaire, exécutez :

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

## Installation

Installez les dépendances JavaScript avec Bun :

```bash
bun install
```

## Développement

Lancez le serveur de développement Eleventy avec :

```bash
bun run serve
```

Eleventy surveille les fichiers MDX et reconstruit automatiquement le site. Par défaut, l'aperçu local est disponible sur [http://localhost:8080](http://localhost:8080).

## Build de production

Générez le site prêt pour la production avec :

```bash
bun run build
```

Le site compilé est écrit dans le dossier `_site/`. Déployez le contenu de `_site/` vers l'hébergeur statique de votre choix.

## Structure du contenu

- `index.mdx` – Page d'accueil avec la section héro et la navigation principale.
- `about/index.mdx` – Page À propos avec le profil et les liens de contact.
- `blog/` – Articles de blog écrits en MDX. Chaque fichier doit inclure des métadonnées comme `title`, `date`, `description` et éventuellement `tags`.
- `til/` – Entrées « Today I Learned » (TIL) stockées sous forme de fichiers MDX légers.

## Ajout de nouveau contenu

1. Créez un nouveau fichier `.mdx` dans le dossier `blog/` ou `til/`.
2. Renseignez l'en-tête YAML en haut du fichier. Pour les articles de blog, incluez `title`, `date`, `description` et `tags`.
3. Rédigez votre contenu en MDX. Vous pouvez utiliser directement des composants React dans le texte.
4. Exécutez `bun run serve` pour prévisualiser les changements en local.

## Styles

Si vous ajoutez un fichier `styles.css` à la racine du projet, Eleventy le copiera tel quel dans le dossier de sortie afin que les styles soient disponibles en production.

## Déploiement

1. Exécutez `bun run build` pour produire la sortie statique dans `_site/`.
2. Téléversez le contenu de `_site/` sur votre hébergeur (Netlify, Vercel, GitHub Pages ou tout autre fournisseur de fichiers statiques).

C'est tout ! Adaptez librement le contenu et les styles selon vos besoins.
