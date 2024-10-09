const express = require('express');
const router = express.Router();
const MailingList = require('../models/MailingList'); // Assuming your model is saved in models/MailingList

// POST route to handle form submission
router.post('/', async (req, res) => {
  const { name, email, preferences } = req.body;

  try {
    // Check if email is already in the mailing list
    const existingEntry = await MailingList.findOne({ email });
    if (existingEntry) {
      return res.status(400).json({ message: 'This email is already on the mailing list.' });
    }

    // Create new mailing list entry
    const newEntry = new MailingList({
      name,
      email,
      preferences,
    });

    await newEntry.save();
    res.status(200).json({ message: 'Successfully added to the mailing list.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error, please try again.' });
  }
});

module.exports = router;
