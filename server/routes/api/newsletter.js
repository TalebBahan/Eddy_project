const express = require('express');
const router = express.Router();
const newsletterController = require('../../controllers/newsletterController');
const multer = require('multer');
const { route } = require('./data');
const { sendNewsLetter } = require('../../controllers/sendEmail');
const ROLES_LIST  = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.post('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.newsletter ), newsletterController.createNewsletter);

// Get all newsletters
router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.newsletter ), newsletterController.getAllNewsletters);
router.post('/getArticlesMediasBooksByIds',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.newsletter ), newsletterController.getArticlesMediasBooksByIds);
router.post('/sendNewsLetter',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.newsletter ), sendNewsLetter);

// Get a single newsletter by ID
router.get('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.newsletter ), newsletterController.getNewsletterById);

// Update a newsletter by ID
router.put('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.newsletter ), newsletterController.updateNewsletterById);

// Delete a newsletter by ID
router.delete('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.newsletter ), newsletterController.deleteNewsletterById);


module.exports = router;

