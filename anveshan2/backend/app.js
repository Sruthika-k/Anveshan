const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');
const sponsorRoutes = require('./routes/sponsors');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/sponsors', sponsorRoutes);

module.exports = app;