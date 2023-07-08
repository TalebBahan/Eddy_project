const express = require('express');
const router = express.Router();
const { getAllData } = require('../../controllers/data');
const { getIdTitle } = require('../../controllers/data');
const { sendMessage } = require('../../controllers/contact');

// Get all videos, content, and about images
router.get('/', getAllData);
router.post('/contact', sendMessage);
router.get('/idTitle', getIdTitle);

module.exports = router;