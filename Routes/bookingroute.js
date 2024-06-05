const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// Schema for booking
/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - bookingId
 *         - userId
 *         - flightNumber
 *         - hotelId
 *         - activityId
 *         - bookingDate
 *         - travelDate
 *         - returnDate
 *         - totalPrice
 *         - status
 *       properties:
 *         bookingId:
 *           type: string
 *           description: Booking Id
 *         userId:
 *           type: string
 *           description: The user's id
 *         flightNumber:
 *           type: string
 *           description: The flight number
 *         hotelId:
 *           type: string
 *           description: The hotel id
 *         activityId:
 *           type: string
 *           description: The activity id
 *         bookingDate:
 *           type: date
 *           description: Booking date
 *         travelDate:
 *           type: date
 *           description: Travel date
 *         returnDate:
 *           type: date
 *           description: Return date
 *         totalPrice:
 *           type: number
 *           description: Total Price
 *         status:
 *           type: number
 *           description: Booking status
 *       example:
 *        bookingId: BKG005
 *        userId: USR005
 *        flightNumber: BA456
 *        hotelId: HTL005,
 *        activityId: ACT005,
 *        bookingDate: 2024-06-05T14:00:00Z
 *        travelDate: 2024-06-19
 *        returnDate: 2024-06-24
 *        totalPrice: 1700
 *        status: confirmed
 */

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: User management
 */

// Define routes for booking-related operations
router.get("/", bookingController.getAllBookings);
router.post("/", bookingController.createBooking);
router.get("/:bookingId", bookingController.getBookingById);
router.put("/:bookingId", bookingController.updateBooking);
router.delete("/:bookingId", bookingController.deleteBooking);

module.exports = router;
