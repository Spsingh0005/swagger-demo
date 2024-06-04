const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  console.log("inside middleware");
  if (this.isModified("password") || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
