const express = require('express');
const router = express.Router();
const Rewards = require('../models/Rewards'); // Assuming your model is saved as Rewards.js

// Route to add a new rewards member
router.post('/', async (req, res) => {
  const { fullName, email, phoneNumber, address, city, zipCode, additionalInfo } = req.body;

  try {
    // Create new member
    const newMember = new Rewards({
      fullName,
      email,
      phoneNumber,
      address,
      city,
      zipCode,
      additionalInfo,
    });

    // Save to the database
    await newMember.save();

    // Send success response
    res.status(201).json({ message: 'Rewards member added successfully!', newMember });
  } catch (error) {
    console.error('Error adding rewards member:', error);
    res.status(500).json({ message: 'Error adding rewards member', error });
  }
});

// Optional: Route to get all rewards members
router.get('/', async (req, res) => {
  try {
    const members = await Rewards.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving rewards members', error });
  }
});

module.exports = router;
