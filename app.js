const express = require("express");
const { specs, swaggerUi, swaggerUiOptions } = require("./swagger");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const User = require("./models/user.model");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ignore favicon requests if the file is not found
app.get("/favicon.ico", (req, res) => res.status(204));

app.use(express.static(path.join(__dirname, "public")));

// Import route files
const userRoutes = require("./Routes/userroute");
const flightRoutes = require("./Routes/flightroute");
const hotelRoutes = require("./Routes/hotelroute");
const activityRoutes = require("./Routes/activityroute");
const bookingRoutes = require("./Routes/bookingroute");

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

// Get user by ID endpoint with Swagger annotations
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags:
 *      - Auth
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

// router.get("/", authController.getAllUsers);

// Serve Swagger UI
app.use("/", swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use("/", userRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);

// Integration of swagger with express js

const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
