// bookRoutes.js

const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController');
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
// Create a new book
router.post('/', [verifyRoles(ROLES_LIST.Admin,ROLES_LIST.books),upload.single('file')] ,bookController.createBook);

// Get all books
router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.books), bookController.getBooks);

// Get a single book
router.get('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.books), bookController.getBook);

// Update an book
router.put('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.books),upload.single('file') , bookController.updateBook);

// Delete an book
router.delete('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.books), bookController.deleteBook);

module.exports = router;
