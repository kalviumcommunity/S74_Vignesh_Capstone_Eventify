const mongoose = require("mongoose");

// Define User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,   // Name is mandatory
    trim: true        // Removes extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,     // Email should be unique
    lowercase: true,  // Stores in lowercase
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"] // Basic email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6      // At least 6 characters
  }
}, { timestamps: true });  // Adds createdAt & updatedAt automatically

// Create User model
const User = mongoose.model("User", userSchema);

module.exports = User;
