const Event = require("../models/eventModels");

const createEvent = async (req, res) => {
  try {
    const { title, date, location, description } = req.body;
    const newEvent = new Event({ title, date, location, description });
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", newEvent });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
};

module.exports = { createEvent };
