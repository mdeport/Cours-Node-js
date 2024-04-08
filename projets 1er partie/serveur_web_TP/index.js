import Express from "express";
import shopRouter from "./routes/shop.js";
import panierRouter from "./routes/panier.js";
import shop_up_productRouter from "./routes/shop_up_product.js";
import bodyParser from "body-parser";

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static("public"));
//http://localhost:3000/images/toto.png
//configure mon applications pour qu'elle utilise ejs comme moteur de templating
//outil qui va generer de l'html
app.set("view engine", "ejs"); //on utilise ejs comme moteur de templating

app.set("views", "views"); //on dit à express que nos vues sont dans le dossier views

app.get("/", (req, res) => {
  res.render("home", {}); //on rend la vue home
});

app.use("/shop", shopRouter); //on utilise le router shopRouter pour toutes les routes qui commencent par /shop

app.use("/panier", panierRouter); //on utilise le router panierRouter pour toutes les routes qui commencent par /panier

app.use("/shop_up_product", shop_up_productRouter); //on utilise le router shop_up_productRouter pour toutes les routes qui commencent par /shop_up_product

app.listen(3000, () => {
  console.log("Server running on port 3000");
}); //le serveur écoute sur le port 3000 : http://localhost:3000/
