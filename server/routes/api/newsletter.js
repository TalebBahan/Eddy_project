const express = require('express');
const router = express.Router();
const newsletterController = require('../../controllers/newsletterController');
const multer = require('multer');
const sendEmail = require('../../controllers/sendEmail');
const path = require('path');
const { log } = require('console');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_'+ path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });
router.post('/', upload.single('image'), newsletterController.createNewsletter);
router.post('/send', sendEmail.sendNewsletter);
router.post("/:id", upload.single('image'), newsletterController.createArticle);
router.get('/:id', newsletterController.getNewsletterById);
router.get('/', newsletterController.getNewsletters);
router.put('/:id', upload.single('image'), newsletterController.updateNewsletterById);
router.delete('/:id', newsletterController.deleteNewsletterById);


module.exports = router;
