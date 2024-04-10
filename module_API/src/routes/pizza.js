import express from "express";
import { getPizza, createPizza, deletePizza, getPizzas, updatePizza } from "../controller/pizza.js";
import { body } from "express-validator";

const router = express.Router();

// GET http://localhost:3001/pizza
router.get("/", getPizzas);

// GET http://localhost:3001/pizza/1
router.get("/:id", getPizza);

// POST http://localhost:3001/pizza
router.post("/", [body("name").trim().isLength({ max: 20, min: 2 }), body("price").trim().isFloat({ min: 0, max: 10000 })], createPizza);

// PUT http://localhost:3001/pizza/1 creer une route qui
// permet de modiier une voiture
router.put("/:id", updatePizza);

// DELETE http://localhost:3001/pizza/1 creer une route qui
// permet de supprimer une voiture
router.delete("/:id", deletePizza);

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;
