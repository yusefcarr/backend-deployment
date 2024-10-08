const express = require('express');
const router = express.Router();
const ReptilePark = require('../models/ReptileParkSchema'); 

// POST: Book a new reptile park session
router.post('/', async (req, res) => {
  const { petName, animal, breed, timeSlot, additionalInfo, price } = req.body;

  try {
    const newReptileParkSession = new ReptilePark({
      petName,
      animal,
      breed,
      timeSlot,
      additionalInfo,
      price
    });

    await newReptileParkSession.save();
    res.status(201).json({ message: 'Reptile Park session booked successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to book the reptile park session' });
  }
});

module.exports = router;
