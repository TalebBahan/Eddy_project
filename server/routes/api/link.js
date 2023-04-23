//  Links routes
var express = require('express');
var router = express.Router();
var linkController = require('../../controllers/linkController');
router.get('/', linkController.getAllLinks );
router.get('/:id', linkController.getLinkById );
router.post('/', linkController.createLink );
router.put('/:id', linkController.updateLink );
router.delete('/:id', linkController.deleteLink );

module.exports = router;
