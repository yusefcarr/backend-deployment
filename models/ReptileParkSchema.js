const mongoose = require('mongoose');

const ReptileParkSchema = new mongoose.Schema({
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
  timeSlot: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
  price: {
    type: Number,
    default: 20, // Default price for an hour slot
    required: true,
  }
});

module.exports = mongoose.model('ReptilePark', ReptileParkSchema);
