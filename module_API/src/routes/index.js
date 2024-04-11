import { Router } from "express";
import isAuth from "../middlewares/auth.js";
import pizzaRouter from "./pizza.js";
import authRoutes from "./auth.js";
import commandeRouter from "./commande.js";
import fileRouter from "./file.js";

const router = Router();

router.use("/auth", authRoutes);

/**
 * @swagger
 * /pizza:
 *   get:
 *     summary: Retourne la liste des pizzas
 *     description: Retourne la liste des pizzas
 *     parameters:
 *       - name: token
 *         in: header
 *     responses:
 *       200:
 *         description: La liste des pizzas
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.use("/pizza", isAuth, pizzaRouter);

router.use("/commande", isAuth, commandeRouter);

router.use("/uploads", fileRouter);

export default router;
