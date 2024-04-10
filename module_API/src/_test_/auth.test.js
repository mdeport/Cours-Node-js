import "dotenv/config";
import mongoose, { mongo } from "mongoose";
import request from "supertest";
const MONGO_STRING = process.env.MONGO_STRING;
import { CreateApp } from "../app.js";
import user from "../models/user.js";

describe("creation d'un utilisateur et login", () => {
  let app;

  beforeAll(() => {
    mongoose
      .connect(MONGO_STRING)
      .then(() => console.log("Connected to the database for Testing!"))
      .catch((err) => console.log(err));
    app = CreateApp();
  });

  it("Should create a new user", async () => {
    const response = await request(app).post("/auth/signup").send({
      email: "test@gmail.com",
      password: "Testt!21",
      name: "test",
      phoneNumber: "123456789",
    });
    expect(response.statusCode).toBe(201);
  });

  let token;

  it("Should login a user", async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "test@gmail.com",
      password: "Testt!21",
    });
    expect(response.statusCode).toBe(200);
    token = response.body.token;
  });

  it("afficher la liste des pizzas", async () => {
    const response = await request(app)
      .get("/pizza")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("afficher la liste des commandes", async () => {
    const response = await request(app)
      .get("/commande")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    await user.deleteOne({ email: "test@gmail.com" });
    await mongoose.connection.close();
  });
});
