const express = require('express');
const router = express.Router();
const {
  createVideo,
  getAllVideos,
  updateVideo,
  deleteVideo
} = require('../../controllers/youtubeController');

// Create a new Youtube video
router.post('/', createVideo);

// Get all Youtube videos
router.get('/', getAllVideos);

// Update a Youtube video by ID
router.put('/:id', updateVideo);

// Delete a Youtube video by ID
router.delete('/:id', deleteVideo);

module.exports = router;
