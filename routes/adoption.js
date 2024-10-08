const express = require('express');
const router = express.Router();
const Adoption = require('../models/AdoptionSchema');

// POST: Create an adoption entry
router.post('/', async (req, res) => {
  const { adopterName, contactInfo, animalType, breed, additionalInfo, price } = req.body;

  try {
    const newAdoption = new Adoption({
      adopterName,
      contactInfo,
      animalType,
      breed,
      additionalInfo,
      price,
    });

    await newAdoption.save();
    res.status(201).json({ message: 'Adoption form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit the adoption form' });
  }
});

// GET: Fetch all adoptions
router.get('/', async (req, res) => {
  try {
    const adoptions = await Adoption.find();
    res.status(200).json(adoptions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch adoption forms' });
  }
});

module.exports = router;
