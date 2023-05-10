// google routrer
const path = require('path');
const express = require('express');
const router = express.Router();
const {  uploadVideo, getvideos, getonevideo, deleteVideo, updateVideo } = require('../../controllers/googleController');


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'views', 'google.html'));
});

// Route for getting all videos by username
router.route('/videos/:username')
  .get(getvideos);

// Route for getting a specific video by ID
router.get('/videos/:id', getonevideo);

// Route for deleting a video by ID
router.delete('/videos/:id', deleteVideo);

// Route for updating a video by ID
router.put('/videos/:id', updateVideo);

// Route for uploading a video
router.post('/upload', uploadVideo);

module.exports = router;
