const mongoose = require('mongoose');

const CreditCardSchema = new mongoose.Schema({
  fullName: {
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
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  }
});

module.exports = mongoose.model('CreditCard', CreditCardSchema);
