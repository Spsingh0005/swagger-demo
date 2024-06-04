const express = require("express");
const app = express();
const authController = require("../controllers/authController");
const User = require("../models/userModel");

// Define routes for user-related operations

// Swagger annotation for the GET /users endpoint

// router.get("/:userId", authController.getUserById);
// router.post("/", authController.createUser);
// router.put("/:userId", authController.updateUser);
// router.delete("/:userId", authController.deleteUser);
// router.post("/signup", authController.signup);

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
 *                   userId:
 *                     type: string
 *                     example: 1
 *                   username:
 *                     type: string
 *                     example: john_doe
 *                   email:
 *                     type: string
 *                     example: john.doe@example.com
 *                   firstName:
 *                     type: string
 *                     example: John
 *                   lastName:
 *                     type: string
 *                     example: Doe
 *                   age:
 *                     type: integer
 *                     example: 30
 *                   gender:
 *                     type: string
 *                     example: male
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *         - firstName
 *         - lastName
 *         - age
 *         - gender
 *       properties:
 *         username:
 *           type: string
 *           description: The user's username
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *         firstName:
 *           type: string
 *           description: The user's first name
 *         lastName:
 *           type: string
 *           description: The user's last name
 *         age:
 *           type: number
 *           description: The user's age
 *         gender:
 *           type: string
 *           enum: [male, female, other]
 *           description: The user's gender
 *       example:
 *         username: johndoe
 *         email: johndoe@example.com
 *         password: password123
 *         firstName: John
 *         lastName: Doe
 *         age: 30
 *         gender: male
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User management
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Create a new user
 *     tags:
 *        - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Username or email already exists
 *       500:
 *         description: Error registering user
 */
// Get user by ID endpoint with Swagger annotations
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags:
 *      - Users
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

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
