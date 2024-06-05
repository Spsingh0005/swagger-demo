const fs = require("fs");
const mongoose = require("mongoose");

// Load Mongoose models
const User = require("./models/userModel");
const Flight = require("./models/flightModel");
const Hotel = require("./models/hotelModel");
const Activity = require("./models/activitiesModel");
const Booking = require("./models/bookingModel");
const City = require("./models/cityModel");

// Connect to your MongoDB database
mongoose.connect(
  "mongodb+srv://robinsingh199815:TydIYQpz1yiHQTEV@book-management-system.w4t4yqc.mongodb.net/Swagger-demo"
);

// Read data from the text file
fs.readFile("dev-data/demoData.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);
  console.log(jsonData.User);

  // Insert data into the database
  async function insertData() {
    try {
      // Insert data for each collection
      await User.insertMany(jsonData.User);
      await Flight.insertMany(jsonData.Flight);
      await Hotel.insertMany(jsonData.Hotel);
      await Activity.insertMany(jsonData.Activity);
      await Booking.insertMany(jsonData.Booking);
      await City.insertMany(jsonData.City);
      console.log("Data inserted successfully");
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
      mongoose.disconnect();
    }
  }

  //   // Call the function to insert data
  insertData();
});
