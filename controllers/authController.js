const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret_key = "my-secret-key";

const genToken = async (id) => {
  console.log("inside jwt function");
  console.log("id is " + id);
  const token = jwt.sign({ id }, secret_key, { expiresIn: "1h" });

  return token;
};

const storeTokenToCookie = async (user_id, user, res) => {
  console.log("inside storing token to cookie function");
  const token = await genToken(user_id);

  // Saving token into cookie
  const cookieOptions = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);

  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send(error);
  }
};

// exports.createUser = () => {};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(
    id,
    req.body
    // username: req.query.username,
    // email: req.query.email,
    // firstName: req.query.firstName,
    // lastName: req.query.lastName,
    // age: req.query.age,
  );

  res.status(200).json({
    status: "success",
    message: "Data updated successfully",
  });
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
    });
  }
};

exports.signup = async (req, res) => {
  const { username, email, password, firstName, lastName, age, gender } =
    req.body;

  try {
    //   // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password,
      firstName,
      lastName,
      age,
      gender,
    });

    // Save user to database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Condition if email and password is not provided.
    if (!email || !password) {
      return res.json({
        message: "Either Email or Password does not exist.",
      });
    }
    const user = await User.findOne({ email });

    // Match if user is found, then run matchpassword function will run.
    if (user) {
      console.log(password);
      if (await user.matchPassword(password)) {
        console.log(user._id);
        storeTokenToCookie(user._id, user, res);
        // res.json({
        //   status: "success",
        //   message: "Login successfully",
        // });
      } else {
        res.json({
          status: "Failed",
          message: "Either email or password is incorrect",
        });
      }
    }
  } catch (error) {
    res.json({
      message: "Internal Server error",
      error,
    });
  }
};
