const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const cors = require('cors');

// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // Parse JSON
app.use(cors()); // Enable CORS

console.log(process.env.MONGO_URI);

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit with failure
  }
};

// Connect to MongoDB
connectDB();

// Pet routes
const petRoutes = require('./routes/pets');
app.use('/pets', petRoutes);

// Product routes
const productRoutes = require('./routes/products');
app.use('/products', productRoutes);
const groomingRoutes = require('./routes/grooming');
app.use('/pet-grooming', groomingRoutes);

// Checkout routes
const checkoutRoutes = require('./routes/checkoutRoutes');
app.use('/checkout', checkoutRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Set up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
});