import express from "express";
import { getProductsPanier, postDeleteProduct } from "../controlleurs/panier_controlleur.js";

const router = express.Router();

router.get("/", getProductsPanier);

router.post("/", postDeleteProduct);

export default router;
