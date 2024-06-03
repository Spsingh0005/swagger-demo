const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Define routes for user-related operations
router.get("/", authController.getAllUsers);
router.post("/", authController.createUser);
router.get("/:userId", authController.getUserById);
router.put("/:userId", authController.updateUser);
router.delete("/:userId", authController.deleteUser);

module.exports = router;
