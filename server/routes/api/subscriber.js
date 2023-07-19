// routes/subscriber.js

const express = require('express');
const router = express.Router();
const subscriberController = require('../../controllers/subscriberController');
const ROLES_LIST  = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.get('/', subscriberController.getSubscribers);
router.get('/:id', subscriberController.getSubscriber);
router.post('/', subscriberController.createSubscriber);
router.post('/deleteMany', subscriberController.deleteMany)
router.put('/:id', subscriberController.updateSubscriber);
router.delete('/:id', subscriberController.deleteSubscriber);

module.exports = router;
