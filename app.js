const express = require("express");
const { specs, swaggerUi, swaggerUiOptions } = require("./swagger");
const app = express();
const mongoose = require("mongoose");
const Users = require("./models/model");
const Products = require("./models/productsModel");
const path = require("path");

// Serve Swagger UI
app.use("/", swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

// Mongoose connection string with password
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

// Ignore favicon requests if the file is not found
app.get("/favicon.ico", (req, res) => res.status(204));

app.use(express.static(path.join(__dirname, "public")));

// Swagger annotation for the GET /users endpoint
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 */
app.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Integration of swagger with express js
// Serve swagger UI

// Serve Swagger UI
app.use("/", swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
