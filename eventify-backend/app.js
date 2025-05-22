// app.js
const express = require('express');
const cors = require('cors');
const eventRoutes = require("./routes/eventroutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/events', eventRoutes);

module.exports = app;
