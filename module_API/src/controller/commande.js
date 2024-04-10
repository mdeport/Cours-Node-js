import Commande from "../models/commande.js";
import Pizza from "../models/pizza.js";
import { validationResult } from "express-validator";

export const createCommande = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  console.log(errors);
  const newCommande = new Commande(bodyContent);
  newCommande
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export const getCommandes = (request, response) => {
  Commande.find()
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};
/*Commande.find()
    .then((result) => {
      result.forEach((element) => {
        const pizzas = element.body.pizzas;
      });
      const pizzas = request.body.pizzas;
      console.log(pizzas);*/
