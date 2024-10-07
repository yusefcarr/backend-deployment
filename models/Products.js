const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  animal: {
    type: String,
    required: true,
    // enum: ['Snake', 'Turtle', 'Gecko', 'Chameleon', 'Crocodile', 'Lizard', 'Bearded Dragon'], // Add more categories if necessary
  },
  imageUrl: {
    type: String, // Store URLs or paths to images
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
