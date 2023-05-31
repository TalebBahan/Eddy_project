const mongoose = require('mongoose');

const heroLinksSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
});

const HeroLinks = mongoose.model('HeroLinks', heroLinksSchema);

module.exports = HeroLinks;
