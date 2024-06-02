const express = require("express");
const { specs, swaggerUi } = require("./swagger");
const app = express();
const mongoose = require("mongoose");
const Users = require("./models/model");
const Products = require("./models/productsModel");

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

  app.use(express.static(path.join(__dirname, 'public')));

// Adding favicon path
app.get("/favicon.ico", (req, res) => res.status(204));



// Adding Swagger Annotation for users
/**
 * @swagger
 * /users:
 *      get:
 *          tags:
 *            - Users
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

// Adding Swagger Annotation for products
// /**
 * @swagger
 * /products:
 *      get:
 *         summary: Get a list of products
 *         tags:
 *          - Products
 *          responses:
 *              '200':
 *                  name:
 *                     type:string
 */
// app.get("/products", async (req, res) => {
//   try {
//     const products = await Products.find();
//     res.json(products);
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.post("/users", async (req, res) => {
//   const user = {
//     name: "Tom hanks",
//   };

//   Users.create(user);
// });

// Integration of swagger with express js
// Serve swagger UI

app.use("/", swaggerUi.serve, swaggerUi.setup(specs));


// Starting server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
