const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const { createEvent } = require("./controllers/eventController");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Connection error:", err));

const PORT = process.env.PORT || 5000;

app.post("/api/events", createEvent);

module.exports = app;
