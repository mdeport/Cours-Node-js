import { Product } from "../models/product_model.js";

export const getIndex = (req, res) => {
  console.log("Product list: ", Products);
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop", {
        pageTitle: "Shop",
        path: "/",
        products: rows,
      });
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};

export const getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop", {
        pageTitle: "shop",
        path: "/",
        products: rows,
      });
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};
