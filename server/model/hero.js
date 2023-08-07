const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  h_text: { type: String, required: true },
  s_text: { type: String, required: true },
  reward: { type: String, required: true }
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
