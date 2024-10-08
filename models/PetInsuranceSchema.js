const mongoose = require('mongoose');

const PetInsuranceSchema = new mongoose.Schema({
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
  insuranceProvider: {
    type: String,
    required: true,
  },
  policyNumber: {
    type: Number,
    required: true,
  },
  additionalInfo: {
    type: String,
  }
});

module.exports = mongoose.model('PetInsurance', PetInsuranceSchema);
