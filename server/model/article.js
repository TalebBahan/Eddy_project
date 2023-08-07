// Article.js

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  imageUrl: { type: String, required: false },
  link: { type: String, required: true },
  interests: { type: [String], required: false },

});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
