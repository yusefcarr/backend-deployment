const mongoose = require('mongoose');

const TrainingSchema = new mongoose.Schema({
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
  trainingTier: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  }
});

module.exports = mongoose.model('Training', TrainingSchema);
