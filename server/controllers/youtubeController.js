const Youtube = require('../model/Youtube');

// Create a new Youtube video
const createVideo = async (req, res) => {
  try {
    const { title, description, videoId } = req.body;
    const newVideo = new Youtube({ title, description, videoId });
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Youtube videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Youtube.find();
    console.log(videos);
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Youtube video by ID
const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, videoId } = req.body;
    const updatedVideo = await Youtube.findByIdAndUpdate(
      id,
      { title, description, videoId },
      { new: true }
    );
    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Youtube video by ID
const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    // find by videoId key and delete
    await Youtube.find({ videoId: id }).deleteOne(
      { videoId: id },
      function (err) {
        if (err) console.log(err);
        console.log("Successful deletion");
      }
    );
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createVideo,
  getAllVideos,
  updateVideo,
  deleteVideo
};
