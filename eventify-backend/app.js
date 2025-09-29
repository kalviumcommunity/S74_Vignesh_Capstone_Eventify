const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const { createEvent } = require("./controllers/eventController");
const { getEvents } = require("./controllers/eventController");
const { updateEvent } = require("./controllers/eventController");
const { deleteEvent } = require("./controllers/eventController");

const { registerUser, loginUser } = require("./controllers/userController");



const app = express();
app.use(express.json());

app.post("/api/events", createEvent);
app.get("/api/events", getEvents);
app.put("/api/events/:id", updateEvent);
app.delete("/api/events/:id", deleteEvent);

app.post("/api/users/register", registerUser);
app.post("/api/users/login", loginUser);



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Connection error:", err));

const PORT = process.env.PORT || 5000;


module.exports = app; 
