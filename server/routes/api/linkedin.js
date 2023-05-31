// linkdin routes

const express = require('express');
const router = express.Router();

const { linkedinLogin, linkedinCallback } = require('../../controllers/linkedinController');


router.get('/login', linkedinLogin);
router.get('/callback', linkedinCallback);

module.exports = router;