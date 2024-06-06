const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

userSchema.pre("find", async function (next) {
  // this.password =
  // bcrypt.compare(this.password,)
});

userSchema.pre("save", async function (next) {
  try {
    // Creating salt
    const salt = await bcrypt.genSalt(12);
    // Creating password with salt
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    return next(error);
  }

  next();
});

userSchema.methods.matchPassword = async function (plaintextpassword) {
  try {
    console.log(
      "inside comparision function try block " +
        plaintextpassword +
        " " +
        this.password
    );
    console.log(await bcrypt.compare(plaintextpassword, this.password));
    return await bcrypt.compare(plaintextpassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
