import express from "express";
import { getIndex, getProducts } from "../controlleurs/shop_controlleur.js";

const router = express.Router();

router.get("/", getProducts);

// router.get("/:id", (req, res) => {
//   try {
//     const product = products.find((product) => product.id === parseInt(req.params.id));
//     res.render("shop_detail", { product });
//   } catch (error) {
//     console.log(error);
//   }
// });

export default router;
