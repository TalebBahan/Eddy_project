// google routrer
const path = require('path');
const express = require('express');
const router = express.Router();
const { getvideos, getonevideo, deleteVideo, updateVideo } = require('../../controllers/googleController');
const ROLES_LIST  = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'views', 'google.html'));
});

// Route for getting all videos by username
router.route('/videos')
  .get(getvideos);

// Route for getting a specific video by ID
// router.get('/videos/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.youtube ), getonevideo);

// // Route for deleting a video by ID
// router.delete('/videos/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.youtube ), deleteVideo);

// // Route for updating a video by ID
// router.put('/videos/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.youtube ), updateVideo);

// Route for uploading a video
// router.post('/upload', uploadVideo);

module.exports = router;
