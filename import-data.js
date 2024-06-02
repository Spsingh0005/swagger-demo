const fs = require("fs");
const mongoose = require("mongoose");

// Load Mongoose models
const User = require("./models/user.model");
const Flight = require("./models/flight.model");
const Hotel = require("./models/hotel.model");
const Activity = require("./models/activities.model");
const Booking = require("./models/booking.model");
const City = require("./models/city.model");

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

  // Insert data into the database
  async function insertData() {
    try {
      // Insert data for each collection
      await User.insertMany(jsonData.users);
      await Flight.insertMany(jsonData.flights);
      await Hotel.insertMany(jsonData.hotels);
      await Activity.insertMany(jsonData.activities);
      await Booking.insertMany(jsonData.bookings);
      await City.insertMany(jsonData.cities);
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
