const Youtube = require('../model/Youtube');
const Content = require('../model/content');
const AboutImages = require('../model/AboutImage');

// Get all videos, content, and about images
const getAllData = async (req, res) => {
  try {
    const videos = await Youtube.find();
    const content = await Content.find();
    const aboutImages = await AboutImages.find();

    res.status(200).json({ youtube: videos, content, aboutImages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllData
};
