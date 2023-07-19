const express = require('express');
const router = express.Router();
const {
  createVideo,
  getAllVideos,
  updateVideo,
  deleteVideo
} = require('../../controllers/youtubeController');
const verifyToken = require('../../middleware/verifyToken');
const ROLES_LIST  = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
// Create a new YouTube video
router.post('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.youtube), createVideo);

// Get all YouTube videos
router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.youtube), getAllVideos);

// Update a YouTube video by ID
router.put('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.youtube), verifyToken, updateVideo);

// Delete a YouTube video by ID
router.delete('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.youtube), deleteVideo);

module.exports = router;
