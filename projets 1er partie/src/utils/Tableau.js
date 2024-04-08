//Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console.
//https://www.hugopich.com/fr/javascript-foreach/#:~:text=La%20méthode%20JavaScript%20forEach%20s,chaque%20élément%20de%20la%20collection.&text=La%20fonction%20callback%20peut%20recevoir,index%20en%20cours%20d%27itération.
export function Affiche_tableau(array) {
  let nombre;
  array.forEach((element) => {
    console.log(element);
  });
}

//Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console.
export function Premier_jour_semaine(array) {
  return array[0];
}

//Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console.
export function Somme_tableau(array) {
  let somme = 0;
  array.forEach((element) => {
    somme += element;
  });
  return somme;
}

//Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console.
export function Ajout_fruits(array, fruit) {
  array.push(fruit);
  return array;
}

//Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console.
export function Moyenne_notes(array) {
  let i = 0,
    summ = 0,
    ArrayLen = array.length;
  while (i < ArrayLen) {
    summ = summ + array[i++];
  }
  return summ / ArrayLen;
}
//Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau.
//https://www.delftstack.com/fr/howto/javascript/javascript-find-object-in-array/
export function recherche_oiseau(array, oiseau) {
  let birdFind;
  array.forEach((birdName) => {
    if (birdName === oiseau) {
      birdFind = birdName;
    }
  });
  if (birdFind) {
    return "Le nom d'oiseau " + birdFind + " est bien présent dans le tableau";
  } else {
    return "l'oiseau n'est pas présent dans le tableau";
  }
}

//Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console.
export function Pays_order_decreasing(array) {
  array.sort();
  return array;
}

//Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau.
export function Troisieme_mois(array) {
  return array[2];
}

//Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console.
export function Value_min_max(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  return "La valeur minimale est " + min + " et la valeur maximale est " + max;
}

//Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console.
export function Phrase_longue(array) {
  let longPhrase = "";
  array.forEach((phrase) => {
    if (phrase.length > longPhrase.length) {
      longPhrase = phrase;
    }
  });
  return "la phrase la plus longue est " + "'" + longPhrase + "'" + " avec " + longPhrase.length + " caractères";
}
