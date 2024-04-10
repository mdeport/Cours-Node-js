import { Router } from "express";
import isAuth from "../middlewares/auth.js";
import pizzaRouter from "./pizza.js";
import authRoutes from "./auth.js";

const router = Router();

router.use("/auth", isAuth, authRoutes);

router.use("/pizza", isAuth, pizzaRouter);

export default router;
