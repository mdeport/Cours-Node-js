import express from "express";
import { getPizza, createPizza, deletePizza, getPizzas, updatePizza } from "../controller/pizza.js";

const router = express.Router();

// GET http://localhost:3001/cars
router.get("/", getPizzas);

// GET http://localhost:3001/cars/1
router.get("/:id", getPizza);

// POST http://localhost:3001/cars
router.post("/", createPizza);

// PUT http://localhost:3001/cars/1 creer une route qui
// permet de modiier une voiture
router.put("/:id", updatePizza);

// DELETE http://localhost:3001/cars/1 creer une route qui
// permet de supprimer une voiture
router.delete("/:id", deletePizza);

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;
