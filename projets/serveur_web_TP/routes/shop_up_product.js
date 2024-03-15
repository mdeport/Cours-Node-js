import express from "express";
import { getProducts, postEditProduct } from "../controlleurs/shop_up_product_controlleur.js";

const router = express.Router();

router.get("/", getProducts); // c'est la route qui va afficher la page shop_up_product

router.post("/", postEditProduct); // c'est la route qui va permettre de modifier un produit

export default router;
