// articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../../controllers/articleController');
const multer = require('multer');
const path = require('path');
const ROLES_LIST  = require('../../config/roles_list');
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
// Create a new article
router.post('/', [verifyRoles(ROLES_LIST.Admin,ROLES_LIST.articles), upload.single('file')] ,articleController.createArticle);
router.post('/withoutimage', [verifyRoles(ROLES_LIST.Admin,ROLES_LIST.articles)] ,articleController.createArticleWithoutImage);

// Get all articles
router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.articles), articleController.getArticles);

// Get a single article
router.get('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.articles), articleController.getArticle);

// Update an article
router.put('/:id',  [verifyRoles(ROLES_LIST.Admin,ROLES_LIST.articles),upload.single('file')] ,articleController.updateArticle);

// Delete an article
router.delete('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.articles), articleController.deleteArticle);

module.exports = router;
