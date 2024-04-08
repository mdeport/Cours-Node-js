import { listPizza } from "../data/mock.js";

export const getPizzas = (req, res) => {
  res.json(listPizza);
};

export const getPizza = (req, res) => {
  const id = parseInt(request.params.id, 10);
  console.log(id);
  if (isNaN(id)) {
    response.status(400).json({ message: "Invalid id" });
  }
  const pizza = listPizza.find((pizza) => pizza.id === id);
  if (pizza) {
    response.json(pizza);
  } else {
    response.status(404).json({ message: "Pizza not found" });
  }
};

export const createPizza = (request, response) => {
  const bodyContent = request.body;
  const id = listPizza.length + 1;
  const newpizza = { id, ...bodyContent };
  listPizza.push(newpizza);
  response.status(201).json(newpizza);
};

export const updatePizza = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const bodyContent = request.body;
  const pizza = listPizza.find((pizza) => pizza.id === id);
  if (pizza) {
    const updatedpizza = { ...pizza, ...bodyContent };
    const index = listPizza.findIndex((pizza) => pizza.id === id);
    listPizza[index] = updatedpizza;
    response.json(updatedpizza);
  } else {
    response.status(404).json({ message: "Pizza not found" });
  }
};

export const deletePizza = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const pizza = listPizza.find((pizza) => pizza.id === id);
  if (pizza) {
    listPizza = listPizza.filter((pizza) => pizza.id !== id);
    response.status(204).end();
  } else {
    response.status(404).json({ message: "Pizza not found" });
  }
};
