// linkdin routes

const express = require('express');
const router = express.Router();

const { linkedinLogin, linkedinCallback , linkedinPosts } = require('../../controllers/linkedinController');


router.get('/login', linkedinLogin);
router.get('/callback', linkedinCallback);
router.get('/Posts', linkedinPosts)

module.exports = router;