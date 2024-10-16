const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const cors = require('cors');

// Api Key
const API_KEY = process.env.API_KEY



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

// Grooming routes
const groomingRoutes = require('./routes/grooming');
app.use('/pet-grooming', groomingRoutes);

// Training routes
const trainingRoutes = require('./routes/training');
app.use('/pet-training', trainingRoutes);

// Vet Services routes
const vetservicesRoutes = require('./routes/vetservices');
app.use('/vet-services', vetservicesRoutes);

// Adoption routes
const adoptionRoutes = require('./routes/adoption');
app.use('/adoption', adoptionRoutes);

// Reptile Park routes
const reptileParkRoutes = require('./routes/reptilePark'); 
app.use('/reptile-park', reptileParkRoutes);

// Pet Insurance routes
const petInsuranceRoutes = require('./routes/petInsurance'); 
app.use('/pet-insurance', petInsuranceRoutes);

// Delivery routes
const deliveryRoutes = require('./routes/delivery'); 
app.use('/delivery', deliveryRoutes);

// Credit Card routes
const creditCardRoutes = require('./routes/creditcard');
app.use('/credit-card', creditCardRoutes);

// Checkout routes
const checkoutRoutes = require('./routes/checkoutRoutes');
app.use('/checkout', checkoutRoutes);

// Mailing List routes
const mailingListRoutes = require('./routes/mailingList'); // Update with the correct path
app.use('/mailing-list', mailingListRoutes);

// Rewards routes
const rewardsRoutes = require('./routes/rewards');
app.use('/rewards', rewardsRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.post('/completions', async (req, res) => {
  const options = {
      method: "POST",
      headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          model : "gpt-4o-mini",
          messages: [{ role: "user", content: req.body.message}],
          max_tokens: 100,
      })
  }
  try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', options)
      const data = await response.json()
      res.send(data)
  } catch (error) {
      console.error(error)
  }
})

// Set up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
});