var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});

var Post = mongoose.model('posts', postSchema);

module.exports = Post;
