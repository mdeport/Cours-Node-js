//1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
export function somme(a, b) {
  return a + b;
}

//2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max#

export function Array_value_max(array) {
  return Math.max.apply(null, array);
}

//3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
export function Rm_voyelle(chaine_caractere) {
  return chaine_caractere.replace(/[aeiouy]/g, "");
}

//4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
export function Array_order_letters(tableau_caractere) {
  return tableau_caractere.sort();
}

//5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".
export function Nombre_en_mots(nombre) {
  const unites = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
  const dizaines = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
  const exceptions = {
    11: "onze",
    12: "douze",
    13: "treize",
    14: "quatorze",
    15: "quinze",
    16: "seize",
    17: "dix-sept",
    18: "dix-huit",
    19: "dix-neuf",
  };

  if (nombre < 0 || nombre > 99 || isNaN(nombre)) {
    return "Nombre invalide";
  }

  if (nombre in exceptions) {
    return exceptions[nombre];
  }

  let unite = nombre % 10;
  let dizaine = Math.floor(nombre / 10);

  let nombre_en_mots = "";

  if (dizaine > 1) {
    nombre_en_mots += dizaines[dizaine];
    if (unite !== 0) {
      nombre_en_mots += "-" + unites[unite];
    }
  } else {
    nombre_en_mots += unites[unite + dizaine * 10];
  }

  return nombre_en_mots;
}

//6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
export function Values_par_property(array, property) {
  return array.map((objet) => objet[property]);
}

//7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
export function Number_order_decreasing(array) {
  return array.sort((a, b) => b - a);
}

//8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.
export function Voyelle_majuscule(value) {
  return value.replace(/[aeiouy]/g, (voyelle) => voyelle.toUpperCase());
}

//9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.
export function Nombre_voyelle(value) {
  return value.match(/[aeiouy]/g).length;
}

//10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.
export function Consonne_majuscule(value) {
  return value.replace(/[^aeiouy]/g, (consonne) => consonne.toUpperCase());
}
