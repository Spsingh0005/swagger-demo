const Flight = require("../models/flightModel");

exports.getAllFlights = async (req, res) => {
  const flights = await Flight.find();
  res.status(200).json({
    results: flights.length,
    data: {
      flights,
    },
  });
};
exports.createFlight = () => {};
exports.getFlightById = () => {};
exports.updateFlight = () => {};
exports.deleteFlight = () => {};
