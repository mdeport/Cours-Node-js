import Express from "express";
import shopRouter from "./routes/shop.js";
import panierRouter from "./routes/panier.js";

const app = Express();

app.use(Express.static("public"));
//http://localhost:3000/images/toto.png
//configure mon applications pour qu'elle utilise ejs comme moteur de templating
//outil qui va generer de l'html
app.set("view engine", "ejs");

app.set("views", "views");

app.get("/", (req, res) => {
  res.render("home", {});
});

app.use("/shop", shopRouter);

app.use("/panier", panierRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
}); //le serveur écoute sur le port 3000 : http://localhost:3000/
