const { getHero, updateHero } = require('../../controllers/hero');
const express = require('express');
const router = express.Router();

// GET /hero
router.get('/', getHero);

// PUT /hero/:id
router.put('/:id', updateHero);

module.exports = router;