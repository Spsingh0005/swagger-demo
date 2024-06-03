const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelController");

// Define routes for hotel-related operations
router.get("/", hotelController.getAllHotels);
router.post("/", hotelController.createHotel);
router.get("/:hotelId", hotelController.getHotelById);
router.put("/:hotelId", hotelController.updateHotel);
router.delete("/:hotelId", hotelController.deleteHotel);

module.exports = router;
