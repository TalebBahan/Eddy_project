// bookRoutes.js

const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController');
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
// Create a new book
router.post('/', upload.single('file') ,bookController.createBook);

// Get all books
router.get('/', bookController.getBooks);

// Get a single book
router.get('/:id', bookController.getBook);

// Update an book
router.put('/:id', bookController.updateBook);

// Delete an book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
