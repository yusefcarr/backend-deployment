const express = require('express');
const router = express.Router();
const VetService = require('../models/VetServiceSchema'); // Make sure the file path is correct

// @route   POST /api/vet-services
// @desc    Create a new vet service entry
// @access  Public
router.post('/', async (req, res) => {
  const { petName, animal, breed, additionalInfo, insuranceProvider, policyNumber } = req.body;

  try {
    const newVetService = new VetService({
      petName,
      animal,
      breed,
      additionalInfo,
      insuranceProvider,
      policyNumber,
    });

    await newVetService.save();
    res.status(201).json({ message: 'Vet service entry created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create vet service entry' });
  }
});

// @route   GET /api/vet-services
// @desc    Get all vet services entries
// @access  Public
router.get('/', async (req, res) => {
  try {
    const vetServices = await VetService.find();
    res.status(200).json(vetServices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve vet services' });
  }
});

// @route   GET /api/vet-services/:id
// @desc    Get a single vet service entry by ID
// @access  Public
router.get('/vet-services/:id', async (req, res) => {
  try {
    const vetService = await VetService.findById(req.params.id);

    if (!vetService) {
      return res.status(404).json({ message: 'Vet service not found' });
    }

    res.status(200).json(vetService);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve vet service' });
  }
});

// @route   PUT /api/vet-services/:id
// @desc    Update a vet service entry
// @access  Public
router.put('/vet-services/:id', async (req, res) => {
  const { petName, animal, breed, additionalInfo, insurance, policy } = req.body;

  try {
    const updatedVetService = await VetService.findByIdAndUpdate(
      req.params.id,
      { petName, animal, breed, additionalInfo, insurance, policy },
      { new: true } // Return the updated document
    );

    if (!updatedVetService) {
      return res.status(404).json({ message: 'Vet service not found' });
    }

    res.status(200).json({ message: 'Vet service updated successfully', updatedVetService });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update vet service' });
  }
});

// @route   DELETE /api/vet-services/:id
// @desc    Delete a vet service entry
// @access  Public
router.delete('/vet-services/:id', async (req, res) => {
  try {
    const deletedVetService = await VetService.findByIdAndDelete(req.params.id);

    if (!deletedVetService) {
      return res.status(404).json({ message: 'Vet service not found' });
    }

    res.status(200).json({ message: 'Vet service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete vet service' });
  }
});

module.exports = router;
