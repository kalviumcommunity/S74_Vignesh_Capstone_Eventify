const Event = require("../models/eventModels");

const createEvent = async (req, res) => {
  try {
    const { name, date, location, description } = req.body;
    const newEvent = new Event({ name, date, location, description });
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", newEvent });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
};

// ✅ New GET handler
const getEvents = async (req, res) => {
  try {
    const events = await Event.find(); // fetch all events
    res.status(200).json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ message: "Server error while fetching events" });
  }
}


const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body, // fields to update
      { new: true, runValidators: true } // return updated doc & validate
    );
    if (!updatedEvent) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event updated successfully", updatedEvent });
  } catch (err) {
    res.status(500).json({ message: "Server error while updating event" });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error while deleting event" });
  }
};

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };