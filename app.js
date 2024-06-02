const express = require("express");
const { specs, swaggerUi } = require("./swagger");
const app = express();
const mongoose = require("mongoose");
const Users = require("./models/model");

// Mongoose connection string with password
//
mongoose
  .connect(
    "mongodb+srv://robinsingh199815:TydIYQpz1yiHQTEV@book-management-system.w4t4yqc.mongodb.net/Swagger-demo"
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// Adding Swagger Annotation
/**
 * @swagger
 * /users:
 *      get:
 *          summary: Get a list of users
 *          responses:
 *              '200':
 *                  name:
 *                     type:string
 */

// Defining Routes
app.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.json({ error });
  }
});
app.get("/favicon.ico", (req, res) => res.status(204));

app.post("/users", async (req, res) => {
  const user = {
    name: "Tom hanks",
  };

  Users.create(user);
});

// Integration of swagger with express js
// Serve swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Starting server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
