const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  animal: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Pet', PetSchema);
