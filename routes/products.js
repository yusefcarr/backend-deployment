const express = require('express');
const Product = require('../models/Products'); // Adjust the path if needed
const router = express.Router();

// @route    GET /api/products
// @desc     Get all products
// @access   Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// @route    GET /api/products/:id
// @desc     Get a product by ID
// @access   Public
// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error', error });
//   }
// });

// @route    POST /api/products
// @desc     Create a new product
// @access   Private (for admins or staff)
router.post('/add', async (req, res) => {
  const { name, description, price, rating, animal, imageUrl, stock } = req.body;

  if (!name || !description || !price || !rating || !animal || !imageUrl || !stock) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      rating,
      animal,
      imageUrl,
      stock,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

router.get('/:animal', async (req, res) => {
  try {
    const animalType = req.params.animal;
    const products = await Product.find({animal: animalType});
    res.json(products)
  } catch (error) {
        res.status(500).json({error: 'Server error'})
  }
})

// @route    PUT /api/products/:id
// @desc     Update a product
// @access   Private (for admins or staff)
router.put('/:id', async (req, res) => {
  const { name, description, price, rating, animal, imageUrl, stock } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, rating, animal, imageUrl, stock },
      { new: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// @route    DELETE /api/products/:id
// @desc     Delete a product
// @access   Private (for admins or staff)
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

module.exports = router;
