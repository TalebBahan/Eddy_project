const express = require('express');
const router = express.Router();
const newsletterController = require('../../controllers/newsletterController');
const multer = require('multer');
const { route } = require('./data');
const { sendNewsLetter } = require('../../controllers/sendEmail');
router.post('/', newsletterController.createNewsletter);

// Get all newsletters
router.get('/', newsletterController.getAllNewsletters);
router.post('/getArticlesMediasBooksByIds', newsletterController.getArticlesMediasBooksByIds);
router.post('/sendNewsLetter', sendNewsLetter);

// Get a single newsletter by ID
router.get('/:id', newsletterController.getNewsletterById);

// Update a newsletter by ID
router.put('/:id', newsletterController.updateNewsletterById);

// Delete a newsletter by ID
router.delete('/:id', newsletterController.deleteNewsletterById);


module.exports = router;

