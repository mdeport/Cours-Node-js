const fruits = ["apple", "banana", "orange"];
fruits.push("pear");
console.log(fruits);

const ben = {
  name: "Benjamin",
  lastname: "seixeiro",
  age: 19,
  isStudent: true,
  hobbies: ["music", "video games", "movies"],
};
console.log(ben.lastname);
console.log(ben.name);

// Destructuring
const { name, lastname, age } = ben;

const someVariable = [...fruits, "kiwi"];
console.log(someVariable);

const someObject = { ...ben, lastname: "franck" };
console.log(someObject);
