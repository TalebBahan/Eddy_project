const express = require('express');
const router = express.Router();
const achievementController = require('../../controllers/achievementController');

router.get('/', achievementController.getAllAchievements);
router.put('/:id', achievementController.updateAchievement);

module.exports = router;
