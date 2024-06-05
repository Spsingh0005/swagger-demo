const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");

// Flight Apis Annotations

// Flight Schema
/**
 * @swagger
 * components:
 *   schemas:
 *     Flight:
 *       type: object
 *       required:
 *         - flightNumber
 *         - airline
 *         - departureAirport
 *         - arrivalAirport
 *         - departureTime
 *         - arrivalTime
 *         - duration
 *         - price
 *         - seatsAvailable
 *       properties:
 *         flightNumber:
 *           type: string
 *           description: Flight Number
 *         airline:
 *           type: string
 *           description: Airline Name
 *         departureAirport:
 *           type: string
 *           description: Departure Airport name code
 *         arrivalAirport:
 *           type: string
 *           description: ArrivalAirport name code
 *         departureTime:
 *           type: date
 *           description: Airline departure time
 *         arrivalTime:
 *           type: date
 *           description: Airline arrival time
 *         duration:
 *           type: number
 *           description: Airline travel duration
 *         price:
 *           type: number
 *           description: Airline ticket price
 *         seatsAvailable:
 *           type: number
 *           description: Airline seats
 *       example:
 *          flightNumber: UA789
 *          airline: United Airlines
 *          departureAirport: SFO
 *          arrivalAirport: MIA
 *          departureTime: 2024-06-17T10:00:00Z
 *          arrivalTime: 2024-06-17T18:00:00Z
 *          duration: 8
 *          price: 450
 *          seatsAvailable: 100
 *
 */

/**
 * @swagger
 * /api/flights:
 *   get:
 *     summary: Get a list of flights
 *     tags:
 *       - Flight
 *     responses:
 *       '200':
 *         description: A list of flights
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Flight'
 */

// Get a list of flights

// Define routes for flight-related operations
router.get("/", flightController.getAllFlights);
router.post("/", flightController.createFlight);
router.get("/:flightId", flightController.getFlightById);
router.put("/:flightId", flightController.updateFlight);
router.delete("/:flightId", flightController.deleteFlight);

module.exports = router;
