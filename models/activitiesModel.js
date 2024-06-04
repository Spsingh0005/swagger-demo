const mongoose = require("mongoose");
const { Schema } = mongoose;

const activitySchema = new Schema({
  activityId: {
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
  description: {
    type: String,
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
  availability: {
    type: [Date],
    required: true,
  },
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
