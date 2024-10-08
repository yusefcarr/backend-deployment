const express = require('express');
const router = express.Router();
const PetInsurance = require('../models/PetInsuranceSchema');

// POST: Submit pet insurance details
router.post('/', async (req, res) => {
  const { petName, animal, breed, insuranceProvider, policyNumber, additionalInfo,} = req.body;

  try {
    const newInsurance = new PetInsurance({
      petName,
      animal,
      breed,
      insuranceProvider,
      policyNumber,
      additionalInfo,
    });

    await newInsurance.save();
    res.status(201).json({ message: 'Pet insurance details submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit insurance details' });
  }
});

// GET: Get all insurance records (optional)
router.get('/', async (req, res) => {
  try {
    const insuranceRecords = await PetInsurance.find();
    res.status(200).json(insuranceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve insurance records' });
  }
});

module.exports = router;
