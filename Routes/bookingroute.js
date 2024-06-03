const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// Define routes for booking-related operations
router.get("/", bookingController.getAllBookings);
router.post("/", bookingController.createBooking);
router.get("/:bookingId", bookingController.getBookingById);
router.put("/:bookingId", bookingController.updateBooking);
router.delete("/:bookingId", bookingController.deleteBooking);

module.exports = router;
