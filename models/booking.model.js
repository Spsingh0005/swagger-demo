const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  flightNumber: {
    type: String,
    required: true,
    trim: true,
  },
  hotelId: {
    type: String,
    required: true,
    trim: true,
  },
  activityId: {
    type: String,
    required: true,
    trim: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  travelDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: [0, "Total price cannot be negative"],
  },
  status: {
    type: String,
    required: true,
    enum: ["confirmed", "pending", "cancelled"],
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
