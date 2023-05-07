// Content routes
var express = require('express');
var router = express.Router();
var contentController = require('../../controllers/contentController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_'+ path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });
router.get('/', contentController.getAllContent);
router.get('/imageAbout', contentController.getAllAboutImages);
router.delete('/imageAbout/:id', contentController.deleteAboutImage);
router.post('/imageAbout' ,upload.single("file"), contentController.createAboutImage);
router.get('/:id', contentController.getContentById);
router.delete('/:id', contentController.deleteContent);
router.post('/' ,upload.single("file"), contentController.createContent);
router.put('/:id', contentController.updateContent);



module.exports = router;
