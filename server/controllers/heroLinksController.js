const HeroLinks = require('../model/heroLinks');

// GET /heroLinks
exports.getHeroLinks = async (req, res) => {
  try {
    const heroLinks = await HeroLinks.find();
    res.json(heroLinks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// PUT /heroLinks/:id
exports.updateHeroLink = async (req, res) => {
  try {
    const { id } = req.params;
    const { link } = req.body;
    console.log('====================================');
    console.log(000000000000000+9);
    console.log('====================================');
    const updatedHeroLink = await HeroLinks.findByIdAndUpdate(
      id,
      { link },
      { new: true }
    );

    if (!updatedHeroLink) {
      return res.status(404).json({ error: 'Hero link not found' });
    }

    res.json(updatedHeroLink);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
