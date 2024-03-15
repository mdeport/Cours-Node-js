import express from "express";
import { getProducts, getProduct, postAddProduct } from "../controlleurs/shop_controlleur.js";

const router = express.Router();

router.get("/", getProducts); // c'est la route qui va être utilisée pour afficher les produits

router.get("/:id", getProduct); // c'est la route qui va être utilisée pour afficher un produit

router.post("/", postAddProduct); // c'est la route qui va être utilisée pour ajouter un produit au panier

export default router;
