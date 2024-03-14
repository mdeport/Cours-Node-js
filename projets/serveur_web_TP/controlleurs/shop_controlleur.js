import { Product } from "../models/product_model.js";

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

export const getProduct = (req, res, next) => {
  console.log(req.params.id);
  const productId = req.params.id;
  Product.findById(productId)
    .then(([rows]) => {
      const product = rows[0];
      res.render("shop_detail", {
        pageTitle: product.name,
        path: "/shop",
        product: product,
      });
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};

export const postAddProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.id, req.body.name, req.body.price, req.body.description, req.body.imageUrl);
  product
    .save()
    .then(() => {
      res.redirect("/shop");
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};
