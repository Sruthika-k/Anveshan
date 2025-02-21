const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/register', (req, res) => {
  User.create(req.body, (err, userId) => {
    if (err) return res.status(400).send(err);
    res.status(201).send({ id: userId });
  });
});

// Get all users
router.get('/', (req, res) => {
  User.getAll((err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

// Other user routes...

module.exports = router;