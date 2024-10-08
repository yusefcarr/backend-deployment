const express = require('express');
const router = express.Router();
const Training = require('../models/TrainingSchema'); // Import the Training model

// @route   POST /api/training
// @desc    Create a new pet training session
// @access  Public
router.post('/', async (req, res) => {
  const { petName, animal, breed, trainingTier, additionalInfo} = req.body;

  try {
    const newTraining = new Training({
      petName,
      animal,
      breed,
      trainingTier,
      additionalInfo
    });

    await newTraining.save();
    res.status(201).json({ message: 'Training session submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit training session' });
  }
});

// @route   GET /api/training
// @desc    Get all training sessions
// @access  Public
router.get('/', async (req, res) => {
  try {
    const trainingSessions = await Training.find();
    res.json(trainingSessions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch training sessions' });
  }
});

// @route   GET /api/training/:id
// @desc    Get a specific training session by ID
// @access  Public
router.get('/training/:id', async (req, res) => {
  try {
    const trainingSession = await Training.findById(req.params.id);
    if (!trainingSession) {
      return res.status(404).json({ message: 'Training session not found' });
    }
    res.json(trainingSession);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch training session' });
  }
});

// @route   DELETE /api/training/:id
// @desc    Delete a training session
// @access  Public
router.delete('/training/:id', async (req, res) => {
  try {
    const deletedSession = await Training.findByIdAndDelete(req.params.id);
    if (!deletedSession) {
      return res.status(404).json({ message: 'Training session not found' });
    }
    res.json({ message: 'Training session deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete training session' });
  }
});

module.exports = router;
