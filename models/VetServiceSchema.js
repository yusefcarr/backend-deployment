const mongoose = require('mongoose');

const VetServiceSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  animal: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
  insuranceProvider: {
    type: String,
    required: true,
  },
  policyNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('VetService', VetServiceSchema);
