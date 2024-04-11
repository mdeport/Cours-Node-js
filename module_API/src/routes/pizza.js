import express from "express";
import { getPizza, createPizza, deletePizza, getPizzas, updatePizza } from "../controller/pizza.js";
import { body } from "express-validator";

const router = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /pizza:
 *   get:
 *     summary: Retourne la liste des pizzas
 *     description: Retourne la liste des pizzas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: La liste des pizzas
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/", getPizzas);

/**
 * @swagger
 * /pizza/{id}:
 *   get:
 *     summary: Retourne la liste des pizzas
 *     description: Retourne la liste des pizzas
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path (url)
 *         required: true
 *     responses:
 *       200:
 *         description: La liste des pizzas
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getPizza);

// POST http://localhost:3001/pizza
router.post("/", [body("name").trim().isLength({ max: 255, min: 2 }), body("price").trim().isFloat({ min: 0, max: 10000 })], createPizza);

// PUT http://localhost:3001/pizza/1
router.put("/:id", updatePizza);

// DELETE http://localhost:3001/pizza/1
router.delete("/:id", deletePizza);

export default router;
