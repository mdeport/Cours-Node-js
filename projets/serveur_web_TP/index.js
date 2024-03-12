import Express from "express";
import shopRouter from "./routes/shop.js";

const app = Express();

//configure mon applications pour qu'elle utilise ejs comme moteur de templating
//outil qui va generer de l'html
app.set("view engine", "ejs");

app.set("views", "views");

app.use((req, res, next) => {
  console.log("middleware");
  req.toto = "toto";
  next();
});

app.get("/", (req, res) => {
  res.render("home", {});
});

app.post("/message", (req, res) => {
  if (req.body.message) {
    return res.status(400).send("Bad request");
  }
  res.send("hello world");
});

app.use("/shop", shopRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
}); //le serveur écoute sur le port 3000 : http://localhost:3000/
