// google routrer
const path = require('path');
const express = require('express');
const router = express.Router();
const { googlelogin, googlecallbak , uploadVideo ,getvideos,getonevideo} = require('../../controllers/googleController');
// const multer =require('multer');
// const upload = multer({ dest: 'uploads/' });
router.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'views', 'google.html'));
})

router.get('/login', googlelogin);
router.get('/redirect', googlecallbak);
router.post('/upload', uploadVideo );
router.get('/videos',getvideos);
router.get('/videos/:id',getonevideo);
module.exports = router;