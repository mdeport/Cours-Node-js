import { Product } from "../models/product_model.js";

export const postEditProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.id, req.body.name, req.body.price, req.body.description);
  product
    .update()
    .then(() => {
      res.redirect("/shop_up_product");
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};

export const getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop_up_product", {
        pageTitle: "shop_up_product",
        path: "/shop_up_product",
        products: rows,
      });
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};
