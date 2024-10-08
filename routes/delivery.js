const express = require('express');
const router = express.Router();
const Delivery = require('../models/Delivery');

// POST route to handle delivery form submissions
router.post('/', async (req, res) => {
  try {
    const { name, address, city, zipCode, animal, deliveryTime, additionalInfo } = req.body;

    const newDelivery = new Delivery({
      name,
      address,
      city,
      zipCode,
      animal,
      deliveryTime,
      additionalInfo,
    });

    await newDelivery.save();
    res.status(200).json({ message: 'Delivery request submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting delivery request', error: err.message });
  }
});

module.exports = router;
