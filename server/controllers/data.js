const Youtube = require('../model/Youtube');
const Content = require('../model/content');
const AboutImages = require('../model/AboutImage');
const HeroLinks = require('../model/heroLinks')
// Get all videos, content, and about images
const getAllData = async (req, res) => {
  try {
    const videos = await Youtube.find();
    const content = await Content.find();
    const aboutImages = await AboutImages.find();
    const heroLinks = await HeroLinks.find();

    res.status(200).json({ youtube: videos, content, aboutImages,heroLinks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllData
};
