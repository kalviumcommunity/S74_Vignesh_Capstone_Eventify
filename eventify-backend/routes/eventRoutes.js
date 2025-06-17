const express = require("express");
const { createEvent } = require("../controllers/eventController");

const router = express.Router();

// POST endpoint
router.post("/events", createEvent);

module.exports = router;
