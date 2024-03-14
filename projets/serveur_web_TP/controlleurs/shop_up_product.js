import { Product } from "../models/product_model.js";

export const postEditProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.id, req.body.title, req.body.imageUrl, req.body.description, req.body.price);
  product
    .update()
    .then(() => {
      res.redirect("/shop");
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};
