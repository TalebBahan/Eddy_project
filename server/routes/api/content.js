// Content routes
var express = require('express');
var router = express.Router();
var contentController = require('../../controllers/contentController');

router.get('/', contentController.getAllContent );
router.get('/:id', contentController.getContentById );
router.post('/', contentController.createContent );
router.put('/:id', contentController.updateContent );
router.delete('/:id', contentController.deleteContent );

module.exports = router;
