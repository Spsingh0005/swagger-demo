const express = require("express");
const { specs, swaggerUi, swaggerUiOptions } = require("./swagger");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const path = require("path");
const User = require("./models/userModel");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ignore favicon requests if the file is not found
app.get("/favicon.ico", (req, res) => res.status(204));

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Import route files
const userRoutes = require("./Routes/userroute");
const flightRoutes = require("./Routes/flightroute");
const hotelRoutes = require("./Routes/hotelroute");
const activityRoutes = require("./Routes/activityroute");
const bookingRoutes = require("./Routes/bookingroute");

app.use("/api/users", userRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);

// router.get("/", authController.getAllUsers);

// Serve Swagger UI
app.use("/", swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Integration of swagger with express js

const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });

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

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
