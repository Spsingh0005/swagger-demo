const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");

// Define routes for flight-related operations
router.get("/", flightController.getAllFlights);
router.post("/", flightController.createFlight);
router.get("/:flightId", flightController.getFlightById);
router.put("/:flightId", flightController.updateFlight);
router.delete("/:flightId", flightController.deleteFlight);

module.exports = router;
