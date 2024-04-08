import express from "express";
import pizzaRouter from "./routes/pizza.js";

const app = express();

const Port = process.env.PORT || 3001;

//middleware
//middleware qui se charge de rediriger les req
//qui concernents les voitures vers le router des voitures
//http://localhost:3001/cars

app.use(express.json());

app.use("/pizza", pizzaRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
