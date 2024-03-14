import express from "express";
import { postAddProduct } from "../controlleurs/shop_up_product.js";

router.get("/:id", getProduct);

router.post("/", postAddProduct);

export default router;
