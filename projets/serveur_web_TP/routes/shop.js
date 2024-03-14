import express from "express";
import { getProducts, getProduct, postAddProduct } from "../controlleurs/shop_controlleur.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", postAddProduct);

export default router;
