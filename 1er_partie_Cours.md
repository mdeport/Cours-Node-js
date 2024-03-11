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
