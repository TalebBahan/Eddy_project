const express = require('express');
const router = express.Router();
const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} = require('../../controllers/linkedin');
const  ROLES_LIST  = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
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
// Get all posts
router.get('/', verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkedin ),  getAllPosts );
// Get single post by ID
router.get('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkedin ), getPostById );
// Create a new post
router.post('/',[verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkedin ),upload.single('file')], createPost );
// Update an existing post
router.put('/:id', verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkedin ),updatePost );
// Delete a post
router.delete('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkedin ), deletePost );
module.exports = router;