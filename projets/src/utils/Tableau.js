//Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console.
//https://www.hugopich.com/fr/javascript-foreach/#:~:text=La%20méthode%20JavaScript%20forEach%20s,chaque%20élément%20de%20la%20collection.&text=La%20fonction%20callback%20peut%20recevoir,index%20en%20cours%20d%27itération.
export function Affiche_tableau(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

//Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console.
export function Premier_jour_semaine(array) {
  console.log(array[0]);
}

//Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console.
export function Somme_tableau(array) {
  let somme = 0;
  array.forEach((element) => {
    somme += element;
  });
  console.log(somme);
}
