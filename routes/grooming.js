const express = require('express');
const router = express.Router();
const Grooming = require('../models/GroomingSchema');

// Route to handle form submission
router.post('/', async (req, res) => {
  const { petName, animal, breed, additionalInfo, price } = req.body;

  try {
    const newGrooming = new Grooming({
      petName,
      animal,
      breed,
      additionalInfo,
      price,
    });

    await newGrooming.save();
    res.status(201).json({ message: 'Grooming appointment submitted!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit grooming appointment' });
  }
});

module.exports = router;
