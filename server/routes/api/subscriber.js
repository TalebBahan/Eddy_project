// routes/subscriber.js

const express = require('express');
const router = express.Router();
const subscriberController = require('../../controllers/subscriberController');

router.get('/', subscriberController.getSubscribers);
router.get('/:id', subscriberController.getSubscriber);
router.post('/', subscriberController.createSubscriber);
router.put('/:id', subscriberController.updateSubscriber);
router.delete('/:id', subscriberController.deleteSubscriber);

module.exports = router;
