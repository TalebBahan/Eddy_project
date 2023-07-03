const express = require('express');
const router = express.Router();
const subscriberController = require('../../controllers/subscriberController');

// Create a new interest
router.post('/', subscriberController.createInterest);

// Get all interests
router.get('/', subscriberController.getAllInterests);

// Get a specific interest by ID
router.get('/:id', subscriberController.getInterestById);

// Update a specific interest by ID
router.put('/:id', subscriberController.updateInterestById);

// Delete a specific interest by ID
router.delete('/:id', subscriberController.deleteInterestById);

module.exports = router;