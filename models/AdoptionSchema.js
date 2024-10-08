const mongoose = require('mongoose');

const AdoptionSchema = new mongoose.Schema({
  adopterName: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  animalType: {
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
  price: {
    type: Number,
    required: true,
    default: 500, // Default adoption fee
  },
});

module.exports = mongoose.model('Adoption', AdoptionSchema);
