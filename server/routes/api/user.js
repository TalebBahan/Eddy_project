const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin), usersController.getAllUsers)
    .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser)
    .post(verifyRoles(ROLES_LIST.Admin), usersController.createUser);
router.route('/connectedUser')
    .get(verifyRoles(ROLES_LIST.User), usersController.getConnectedUser);
router.route('/:id')
    .get(verifyRoles(ROLES_LIST.Admin), usersController.getUser)
    .put(verifyRoles(ROLES_LIST.Admin), usersController.updateUserRoles);

module.exports = router;