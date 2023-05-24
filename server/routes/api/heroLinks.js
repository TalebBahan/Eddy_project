const express = require('express');
const router = express.Router();
const heroLinksController = require('../../controllers/heroLinksController');

// GET /heroLinks
router.get('/', heroLinksController.getHeroLinks);

// PUT /heroLinks/:id
router.put('/:id', heroLinksController.updateHeroLink);

module.exports = router;
