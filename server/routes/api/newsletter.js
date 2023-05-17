const express = require('express');
const router = express.Router();
const newsletterController = require('../../controllers/newsletterController');
const multer = require('multer');
const sendEmail = require('../../controllers/sendEmail');
const path = require('path');
const { log } = require('console');
const  ROLES_LIST  = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_'+ path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });
router.post('/', [verifyRoles(ROLES_LIST.Admin), upload.single('image')], newsletterController.createNewsletter);
router.post('/send',verifyRoles(ROLES_LIST.Admin), sendEmail.sendNewsletter);
router.delete('/deleteA',verifyRoles(ROLES_LIST.Admin), newsletterController.deleteArticle);
router.post("/:id",[verifyRoles(ROLES_LIST.Admin), upload.single('image')], newsletterController.createArticle);
router.get('/:id',verifyRoles(ROLES_LIST.Admin), newsletterController.getNewsletterById);
router.get('/',verifyRoles(ROLES_LIST.Admin), newsletterController.getNewsletters);
router.put('/:id', [verifyRoles(ROLES_LIST.Admin),upload.single('image')], newsletterController.updateNewsletterById);
router.delete('/:id',verifyRoles(ROLES_LIST.Admin), newsletterController.deleteNewsletterById);


module.exports = router;
