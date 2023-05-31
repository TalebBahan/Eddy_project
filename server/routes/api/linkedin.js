// linkdin routes

const express = require('express');
const router = express.Router();

const { linkedinlogin, linkedinCallback } = require('../../controllers/linkedincontroller');


router.get('/login', linkedinlogin);
router.get('/callback', linkedinCallback);

module.exports = router;