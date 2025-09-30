const mongoose = require("mongoose");
const User = require("./user");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true
  }
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
