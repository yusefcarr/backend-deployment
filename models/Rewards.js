const mongoose = require('mongoose');

const RewardsSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure no duplicate emails
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
});

module.exports = mongoose.model('Rewards', RewardsSchema);
