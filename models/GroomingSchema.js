const mongoose = require('mongoose');

const GroomingSchema = new mongoose.Schema({
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
  price: {
    type: Number,
    required: true,
  }

});

module.exports = mongoose.model('Grooming', GroomingSchema);
