// Function.md
console.log("Function.md");
console.log("");

import { somme, Array_value_max, Rm_voyelle, Array_order_letters, Nombre_en_mots, Values_par_property, Number_order_decreasing, Voyelle_majuscule, Nombre_voyelle, Consonne_majuscule } from "./src/utils/function.js";

const a = 45;
const b = 42;
const nombre = [5, 6, 9, 11, 3, 8, 2, 4, 10];
const chaine_caractere = "bonjour tout le monde c'est moi";
const tableau_caractere = ["bonjour", "tout", "le", "monde", "c'est", "moi"];
const nombre_en_mots = 42;
const tableau_objet = [
  {
    name: "mateo",
    lastname: "deport",
  },
  {
    name: "clement",
    lastname: "berard",
  },
  {
    name: "mounir",
    lastname: "Bendahmane",
  },
];
const cle_tableau = "name";

console.log("Exercice 1: ");
console.log(somme(a, b));

console.log("");

console.log("Exercice 2: ");
console.log(Array_value_max(nombre));

console.log("");

console.log("Exercice 3: ");
console.log(Rm_voyelle(chaine_caractere));

console.log("");

console.log("Exercice 4: ");
console.log(Array_order_letters(tableau_caractere));

console.log("");

console.log("Exercice 5: ");
console.log(Nombre_en_mots(nombre_en_mots));

console.log("");

console.log("Exercice 6: ");
console.log(Values_par_property(tableau_objet, cle_tableau));

console.log("");

console.log("Exercice 7: ");
console.log(Number_order_decreasing(nombre));

console.log("");

console.log("Exercice 8: ");
console.log(Voyelle_majuscule(chaine_caractere));

console.log("");

console.log("Exercice 9: ");
console.log(Nombre_voyelle(chaine_caractere));

console.log("");

console.log("Exercice 10: ");
console.log(Consonne_majuscule(chaine_caractere));
