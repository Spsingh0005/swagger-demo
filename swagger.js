// Adding Swagger.js

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Creating options for swagger
const options = {
  swaggerDefinition: {
    info: {
      title: "Swagger Demo APIs",
      version: "1.0.0",

      description: "This is a testing application by using swagger.",

      contact: {
        name: "Robin",
        url: "https://your-website.com",
        email: "your-email@domain.com",
      },
      tags: [
        {
          name: "Users",
          description: "Operations related to users",
        },
        {
          name: "Products",
          description: "Operations related to products",
        },
      ],
    },
    apis: ["app.js"],
  },
};

// Passing options inside swagger docs
const specs = swaggerJsdoc(options);

// Exporting swagger specs and swaggerUi

module.exports = { specs, swaggerUi };
