import { Product } from "../models/product_model.js";

export const getProductsPanier = (req, res, next) => {
  Product.fetchAllPanier()
    .then(([rows, fieldData]) => {
      res.render("panier", {
        pageTitle: "panier",
        path: "/",
        products: rows,
      });
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};

export const postDeleteProduct = (req, res, next) => {
  Product.delete(req.body.id)
    .then((result) => {
      console.log("delete result:", result);
      res.redirect("/panier");
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};
