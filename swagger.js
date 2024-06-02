// Adding Swagger.js

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Creating options for swagger
// Swagger setup
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Custom API Documentation",
      version: "1.0.0",
      description: "This is the custom API documentation description.",
      contact: {
        name: "Your Name",
        url: "https://your-website.com",
        email: "your-email@domain.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000", // Update with your server URL
        description: "Local server",
      },
    ],
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
  apis: ["./app.js"], // Adjust this to include all files where APIs are defined
};

const swaggerUiOptions = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "My Custom API Docs",
  customfavIcon: "/favicon.ico", // Path to your custom favicon relative to the public directory
};
// Passing options inside swagger docs
const specs = swaggerJsdoc(options);

// Exporting swagger specs and swaggerUi

module.exports = { specs, swaggerUi, swaggerUiOptions };
