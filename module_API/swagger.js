import swaggerJSDoc from "swagger-jsdoc";
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Pizza API",
    version: "1.0.0",
    description: "C'est une API pour gérer des pizzas et des commandes de pizzas",
  },
};
const options = {
  swaggerDefinition,
  apis: ["./module_API/src/routes/auth.js", "./module_API/src/routes/pizza.js", "./module_API/src/routes/commandes.js", "./module_API/src/routes/index.js"],
};
const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
