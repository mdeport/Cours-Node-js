import { Router } from "express";
import isAuth from "../middlewares/auth.js";
import pizzaRouter from "./pizza.js";
import authRoutes from "./auth.js";
import commandeRouter from "./commande.js";
import fileRouter from "./file.js";

const router = Router();

router.use("/auth", authRoutes);

router.use("/pizza", isAuth, pizzaRouter);

router.use("/commande", isAuth, commandeRouter);

router.use("/uploads", fileRouter);

export default router;
