const { getAllMedia,getMediaById, updateMedia, deleteMedia, createMedia} = require('../../controllers/media');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_'+ path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// GET /media
router.get('/', getAllMedia);
router.get('/:id', getMediaById);
router.post('/',upload.single('file'), createMedia);
// PUT /media/:id
router.put('/:id',upload.single('file'), updateMedia);
router.delete('/:id', deleteMedia);

module.exports = router;