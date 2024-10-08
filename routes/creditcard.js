const express = require('express');
const router = express.Router();
const CreditCard = require('../models/CreditCard');

// POST route to handle credit card application submission
router.post('/', async (req, res) => {
  try {
    const { fullName, address, city, zipCode, email, additionalInfo } = req.body;

    const newCreditCardApplication = new CreditCard({
      fullName,
      address,
      city,
      zipCode,
      email,
      additionalInfo,
    });

    await newCreditCardApplication.save();
    res.status(200).json({ message: 'Credit card application submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting credit card application', error: err.message });
  }
});

module.exports = router;
