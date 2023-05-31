const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  readMoreLink: {
    type: String,
    required: true,
  },


});

const newsletterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
    required: true,
  },
  articles: [articleSchema],
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Newsletter', newsletterSchema);
