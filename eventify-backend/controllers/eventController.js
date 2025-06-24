const Event = require("../models/eventModels");

// POST handler already exists
async function createEvent(req, res) { /*...*/ }

// ✅ New GET handler
async function getEvents(req, res) {
  try {
    const events = await Event.find(); // fetch all events :contentReference[oaicite:2]{index=2}
    res.status(200).json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ message: "Server error while fetching events" });
  }
}

module.exports = { createEvent, getEvents };
