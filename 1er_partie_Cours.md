# Node.js

## Partie 1 :Introduction

### 1.1 Qu'est-ce que Node.js?

Node.js est un environnement d'exécution JavaScript côté serveur. Il utilise le moteur JavaScript V8 de Google et il est conçu pour être utilisé pour créer des applications web évolutives et rapides. Il est open source et multiplateforme, ce qui signifie qu'il peut être utilisé sur n'importe quel système d'exploitation, y compris Windows, Mac OS X et Linux.

### 1.2 role et utilistation de Node.js

Node.js est utilisé pour créer des applications web évolutives et rapides. Il est conçu pour être utilisé pour créer des applications web évolutives et rapides. Il est open source et multiplateforme, ce qui signifie qu'il peut être utilisé sur n'importe quel système d'exploitation, y compris Windows, Mac OS X et Linux.

## 2. Code JS

### 2.1 Les bases de JavaScript

fonction et argument en JS
exemple de code

```javascript
console.log("Hello, World!");
```

log est une fonction qui prend un argument et l'affiche dans la console.
et ('Hello, World!') est l'argument de la fonction log.

### 2.2 installer une dependance

Pour installer une dépendance, on va utiliser le gestionnaire de paquets npm. Pour installer une dépendance utiliser la commande suivante :

```bash
npm install nom_de_la_dependance
```

pour une dependance de developpement ont utilise la commande suivante :

```bash
npm install -D nom_de_la_dependance
```

## 3. Raffraichissement sur les bases de JavaScript

### 3.1 Déclaration de variables

En JavaScript, on peut déclarer des variables en utilisant les mots-clés `var`, `let` ou `const`.

let x = 5;
const y = 10;
var z = 15;

let sert a déclarer une variable qui peut être modifiée, tandis que const sert a déclarer une variable qui ne peut pas être modifiée.

let designe l'operateur d'assignation (affectation).

var est a eviter car il peut causer des problemes de portée et créer des petit problème de sécurité.

### 3.2 Les types de données

Ont peux déclarer des variables de plusieurs types de données en JavaScript, tels que les nombres, les chaînes de caractères, les booléens, les tableaux, les objets, etc.

```javascript
let SomeBool = true; // type Boolean
let nullValue = null; // type Null
let someArray = []; // type Array
let someObject = {
  key: "value",
  key2: "value2",
}; // type Object
```

### 3.3 Les fonctions

il y a plusieurs forme de fonction, on peux écrire la meme chose de façon differente.

    ``` Syntaxe de base
    function auCarre(x) {
      return x * x;
    }
    ```

    ``` Syntaxe fléchée
    const auCarre = (x) => {
      return x * x;
    }
    ```

    ```si la fonction ne contient qu'une seule instruction, on peut ommettre les accolades et le mot-clé return.
    const auCarre = (x) => x * x;
    ```

    ```
    ()=>{}
    ```

### 3.4 les tableaux

Un tableau est une structure de données qui permet de stocker plusieurs valeurs dans une seule variable.

```javascript
const fruits = ["apple", "banana", "orange"];
fruits.push("pear");
console.log(fruits);
```

### 3.5 les objets

Un objet est une structure de données qui permet de stocker des paires clé-valeur.

```javascript
const ben = {
  name: "Benjamin",
  lastname: "seixeiro",
  age: 19,
  isStudent: true,
  hobbies: ["music", "video games", "movies"],
};
console.log(ben.name);
console.log(ben.hobbies[0]);
```

## 4. Les modules en Node.js

### 4.1 Introduction

Un module est un ensemble de fonctions et de variables qui peuvent être utilisées dans d'autres fichiers. En Node.js, les modules sont des fichiers JavaScript qui exportent des fonctions et des variables.

### 4.2 Modules

il existe deux syntaxes pour importer des modules en Node.js.

- la syntaxe CommonJS(utilisé dans node.js)
- la syntaxe ES6+ (utilisé dans les navigateurs)

ESM = EcmaScript Module

Exemple de syntaxe CommonJS :

```javascript

```

### 4.3 Quesque un callback

Un callback est une fonction qui est passée en argument à une autre fonction. Elle est appelée une fois que l'autre fonction a terminé son exécution.

```javascript
function doSomethingAsync(callback) {
  setTimeout(() => {});
}
```

## 5. Etape créer un serveur web

### 5.1 Introduction

Pour créer un serveur web en Node.js, on va utiliser le module `http`. Ce module nous permet de créer un serveur web qui écoute sur un port donné.

### 5.2 Etape de création

1. créer un fichier `server.js`
2. NPM init
3. dans le fichier

## 6. Middleware

### 6.1 Introduction

Un middleware est une fonction qui est exécutée avant ou après une autre fonction. En Node.js, les middlewares sont utilisés pour effectuer des tâches telles que l'authentification, la validation des données, le logging, etc.

c'est une logique qui s'execute entre la requete et la reponse.

### 6.2 Exemple de middleware

```javascript
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
```

sa sert par exemple sur le systeme authentification, si l'utilisateur est authentifié, il peut acceder a la page, sinon il est redirigé vers la page de connexion ou une page d'erreur.

## 7. MVC

### 7.1 Introduction

MVC est un modèle d'architecture logicielle qui sépare les données, la logique métier et l'interface utilisateur. En Node.js, MVC est utilisé pour organiser le code d'une application web en trois parties distinctes : les modèles, les vues et les contrôleurs.

### 7.2 Les modèles

Les modèles sont des classes qui représentent les données de l'application. Ils sont utilisés pour stocker, récupérer et manipuler les données de l'application.

### 7.3 Les vues

Les vues sont des fichiers qui représentent l'interface utilisateur de l'application. Elles sont utilisées pour afficher les données de l'application à l'utilisateur.

### 7.4 Les contrôleurs

Les contrôleurs sont des classes qui contiennent la logique métier de l'application. Ils sont utilisés pour traiter les requêtes des utilisateurs et pour interagir avec les modèles et les vues.
le pont qui relie les modèles et les vues.

## 8. Connection a une base de données

### 8.1 Introduction

Pour se connecter à une base de données en Node.js, on va utiliser un module appelé `mysql`. Ce module nous permet de se connecter à une base de données MySQL et d'exécuter des requêtes SQL.

### 8.2 Quelle base de données

Mysql2
