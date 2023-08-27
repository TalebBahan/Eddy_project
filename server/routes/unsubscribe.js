const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');


router.get('/', subscriberController.unsubscribe);

module.exports = router;
