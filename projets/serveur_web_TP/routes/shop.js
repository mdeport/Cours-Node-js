import express from "express";
import products from "../public/js/product.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", { products });
});

router.get("/:id", (req, res) => {
  try {
    const product = products.find((product) => product.id === parseInt(req.params.id));
    res.render("shop_detail", { product });
  } catch (error) {
    console.log(error);
  }
});

export default router;
