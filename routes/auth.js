const express = require("express");
const router = express.Router();

const User = require("../models/User");

// ================= REGISTER =================

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check all fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password
    });

    await user.save();

    res.status(201).json({
      message: "Registration successful",
      user
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
});


// ================= LOGIN =================

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({
        message: "Incorrect password"
      });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
});


// Export router
module.exports = router;