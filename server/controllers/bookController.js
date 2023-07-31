// bookController.js

const Book = require('../model/book');

// Create a new book
const createBook = async (req, res) => {
  try {
    req.body.imageUrl = req.file.filename;
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the book' });
  }
};

// Get all books
const getBooks = async (req, res) => {
  try {
    // latest first
    const books = await Book.find().sort({ _id: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the books' });
  }
};

// Get a single book
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    console.log(book);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the book' });
  }
};

// Update an book
const updateBook = async (req, res) => {
  if (req.file) {
    req.body.imageUrl = req.file.filename;
  }
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the book' });
  }
};

// Delete an book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the book' });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
