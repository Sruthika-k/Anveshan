const express = require('express');
const router = express.Router();
const Event = require('../models/event'); // Ensure the case matches the actual file name

// Create a new event
router.post('/', (req, res) => {
  Event.create(req.body, (err, eventId) => {
    if (err) return res.status(400).send(err);
    res.status(201).send({ id: eventId });
  });
});

// Get all events
router.get('/', (req, res) => {
  Event.getAll((err, events) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(events);
  });
});

// Other event routes...

module.exports = router;