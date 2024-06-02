const mongoose = require("mongoose");
const { Schema } = mongoose;

const flightSchema = new Schema({
  flightNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  airline: {
    type: String,
    required: true,
    trim: true,
  },
  departureAirport: {
    type: String,
    required: true,
    trim: true,
  },
  arrivalAirport: {
    type: String,
    required: true,
    trim: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    min: [0, "Duration cannot be negative"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be negative"],
  },
  seatsAvailable: {
    type: Number,
    required: true,
    min: [0, "Seats available cannot be negative"],
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
