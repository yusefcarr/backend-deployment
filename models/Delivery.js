const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  name: {
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
  animal: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  }
});

module.exports = mongoose.model('Delivery', DeliverySchema);
