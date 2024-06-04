const mongoose = require("mongoose");

// Define the schema for New York city data
const citySchema = new mongoose.Schema({
  cityId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  popularAttractions: {
    type: [String],
    required: true,
  },
  averageHotelPrice: {
    type: Number,
    required: true,
  },
  averageFlightPrice: {
    type: Number,
    required: true,
  },
});

// Create a model using the schema
const City = mongoose.model("City", citySchema);

module.exports = City;
