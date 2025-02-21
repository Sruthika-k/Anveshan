const express = require('express');
const router = express.Router();
const Sponsor = require('../models/Sponsor');

// Create a new sponsor
router.post('/', (req, res) => {
  Sponsor.create(req.body, (err, sponsorId) => {
    if (err) return res.status(400).send(err);
    res.status(201).send({ id: sponsorId });
  });
});

// Get all sponsors
router.get('/', (req, res) => {
  Sponsor.getAll((err, sponsors) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(sponsors);
  });
});

// Other sponsor routes...

module.exports = router;