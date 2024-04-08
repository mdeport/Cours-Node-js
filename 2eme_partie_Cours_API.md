# API

## Pourquoi une API rest ?

Tous les front end ne requiert pas neceessairement de page html

- Les applications mobiles
- Les SPA (Single Page Application)
- d'autre API

Pour la réponse d'une API il y a deux fomrmat d'echange de données

- XML :
  XML est un langage de balisage qui permet de structurer des données. Il est souvent utilisé pour échanger des données entre un serveur et un client.
- JSON : JSON est un format de données qui est facile à lire et à écrire. Il est souvent utilisé pour échanger des données entre un serveur et un client.

**Mern stack : MongoDB, Express, React, Node.js**

## lancer le projet API

Création dun projet node

```bash
npm init -y
```

Installation des dépendances

```bash
npm install express
```

Création d'un fichier `index.js` dasn un dossier src

```bash
mkdir src
touch src/index.js
```

Modification du package.json pour ajouter un script de damarage:

```json
"scripts": {
    "start": "node src/index.js"
  },
```
