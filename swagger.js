// Adding Swagger.js

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Creating options for swagger
const options = {
  swaggerDefinition: {
    info: {
      title: "Swagger Demo Api",
      version: "1.0.0",
      description: "This is a testing application by using swagger.",
    },
  },
  apis: ["app.js"],
};

// Passing options inside swagger docs
const specs = swaggerJsdoc(options);

// Exporting swagger specs and swaggerUi

module.exports = { specs, swaggerUi };
