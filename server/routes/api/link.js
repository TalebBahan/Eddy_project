//  Links routes
var express = require('express');
var router = express.Router();
var linkController = require('../../controllers/linkController');
const ROLES_LIST  = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');


router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkAdmin,ROLES_LIST.linkEditor,ROLES_LIST.linkUser), linkController.getAllLinks );
router.get('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkAdmin,ROLES_LIST.linkEditor,ROLES_LIST.linkUser), linkController.getLinkById );
router.post('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkAdmin,ROLES_LIST.linkEditor), linkController.createLink );
router.put('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkAdmin,ROLES_LIST.linkEditor), linkController.updateLink );
router.delete('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.linkAdmin), linkController.deleteLink );

module.exports = router;
