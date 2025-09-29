const express = require("express");
const { createEvent } = require("../controllers/eventController");

const router = express.Router();

// POST endpoint
router.post("/events", createEvent);
router.get("/events", getEvents);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);  

module.exports = router; 
