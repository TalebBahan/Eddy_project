const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/postController');
const  ROLES_LIST  = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');


router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.postAdmin,ROLES_LIST.postEditor,ROLES_LIST.postUser),  postsController.getAllPosts );
router.get('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.postAdmin,ROLES_LIST.postEditor,ROLES_LIST.postUser), postsController.getPostById );
router.post('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.postAdmin,ROLES_LIST.postEditor), postsController.createPost );
router.put('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.postAdmin,ROLES_LIST.postEditor,ROLES_LIST.postUser), postsController.updatePost );
router.delete('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.postAdmin), postsController.deletePost );

module.exports = router;
``