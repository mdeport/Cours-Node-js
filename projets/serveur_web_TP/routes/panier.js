import express from "express";
import { getProductsPanier, postDeleteProduct } from "../controlleurs/panier_controlleur.js";

const router = express.Router();

router.get("/", getProductsPanier); // c'est la route qui va être utilisée pour afficher le panier

router.post("/", postDeleteProduct); // c'est la route qui va être utilisée pour supprimer un produit du panier

export default router;
