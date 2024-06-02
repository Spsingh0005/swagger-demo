const express = require("express");
const { specs, swaggerUi, swaggerUiOptions } = require("./swagger");
const app = express();
const mongoose = require("mongoose");
const Users = require("./models/model");
const Products = require("./models/productsModel");
const path = require("path");
const User = require("./models/userSchema");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

/**
 * @swagger
 * /signup:
 *  post:
 *    summary: User Signup
 *    tags:
 *     - Auth
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *  responses:
 *    201:
 *      description: User registered successfully
 *    400:
 *      description: Username already exists
 *    500:
 *      description: Internal server error
 */
app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    // const existingUser = await Users.findOne({ username });

    // if (existingUser) {
    //   return res.status(400).json({ message: "User already exist" });
    // }
    const newUser = new User({ username, password });
    await newUser.save(); // This is the save command
    res.json({
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get user by ID endpoint with Swagger annotations
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: The user data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 username:
 *                   type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Integration of swagger with express js

// Serve Swagger UI
app.use("/", swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
