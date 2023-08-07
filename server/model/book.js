// Book.js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
  interests: { type: [String], required: false },


});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
