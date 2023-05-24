const express = require('express');
const router = express.Router();
const {
  createVideo,
  getAllVideos,
  updateVideo,
  deleteVideo
} = require('../../controllers/youtubeController');
const verifyToken = require('../../middleware/verifyToken');

// Create a new YouTube video
router.post('/', verifyToken, createVideo);

// Get all YouTube videos
router.get('/', verifyToken, getAllVideos);

// Update a YouTube video by ID
router.put('/:id', verifyToken, updateVideo);

// Delete a YouTube video by ID
router.delete('/:id', verifyToken, deleteVideo);

module.exports = router;
