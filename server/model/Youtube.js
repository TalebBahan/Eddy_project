const mongoose = require('mongoose');
const { Schema } = mongoose;

const youtubeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now },
  videoId: { type: String, required: true }
});

const Youtube = mongoose.model('Youtube', youtubeSchema);

module.exports = Youtube;
