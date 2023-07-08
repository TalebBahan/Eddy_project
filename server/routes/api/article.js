// articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../../controllers/articleController');
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
// Create a new article
router.post('/', upload.single('file') ,articleController.createArticle);

// Get all articles
router.get('/', articleController.getArticles);

// Get a single article
router.get('/:id', articleController.getArticle);

// Update an article
router.put('/:id', articleController.updateArticle);

// Delete an article
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
