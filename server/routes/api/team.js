// team api

const express = require('express');
const router = express.Router();
const teamController = require('../../controllers/teamController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin), teamController.getAllTeams)
    .post(verifyRoles(ROLES_LIST.Admin), teamController.createTeam)
    .delete(verifyRoles(ROLES_LIST.Admin), teamController.deleteTeam);
        
router.route('/:id') 
    .get(verifyRoles(ROLES_LIST.Admin), teamController.getTeam)
   

module.exports = router;
