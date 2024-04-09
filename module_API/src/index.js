import "dotenv/config";
import express from "express";
import pizzaRouter from "./routes/pizza.js";
import authRoutes from "./routes/auth.js";
import mongoose from "mongoose";
import isAuth from "./middlewares/auth.js";

const app = express();

console.log("env: ", process.env.MONGO_STRING);

const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

app.use(express.json());

app.use("/pizza", isAuth, pizzaRouter);
app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

app.use("/error", (req, res) => {
  try {
    throw new Error("Une erreur est survenue");
  } catch (error) {}
});

mongoose.connect(MONGO_STRING).then(() => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
