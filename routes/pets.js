const express = require('express');
const Pet = require('../models/Pets');
const router = express.Router();

// Add a new pet
router.post('/add', async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    const savedPet = await newPet.save();
    res.json(savedPet);
  } catch (error) {
    res.status(500).json({ message: 'Error adding pet', error });
  }
});

// Get all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pets', error });
  }
});
//GET pets by animal type
router.get('/:animal', async (req, res) => {
  try {
    const animalType = req.params.animal;
    const pets = await Pet.find({animal: animalType});
    res.json(pets)
  } catch (error) {
        res.status(500).json({error: 'Server error'})
  }
})


// Get a single pet by ID
router.get('/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pet', error });
  }
});

// Update a pet by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: 'Error updating pet', error });
  }
});

// Delete a pet by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    if (!deletedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pet', error });
  }
});

module.exports = router;

