const mongoose = require("mongoose");
const { Schema } = mongoose;

const hotelSchema = new Schema({
  hotelId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    min: [0, "Rating cannot be negative"],
    max: [5, "Rating cannot be greater than 5"],
  },
  pricePerNight: {
    type: Number,
    required: true,
    min: [0, "Price per night cannot be negative"],
  },
  amenities: {
    type: [String],
    required: true,
  },
  roomsAvailable: {
    type: Number,
    required: true,
    min: [0, "Rooms available cannot be negative"],
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
