const express = require('express');
const router = express.Router();
const { getAllData } = require('../../controllers/data');

// Get all videos, content, and about images
router.get('/', getAllData);

module.exports = router;