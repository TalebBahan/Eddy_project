const Newsletter = require('../model/newsletter'); 
const Content = require('../model/content');
const Article = require('../model/article');
const Book = require('../model/book')
// Create a newsletter
exports.createNewsletter = async (req, res) => {
  try {
    const { title, subject, body } = req.body;
    const newsletter = await Newsletter.create({ title, subject, body });
    res.status(201).json(newsletter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create newsletter' });
  }
};
exports.getArticlesMediasBooksByIds = async (req, res) => {
  try {
    const { articlesIds, booksIds, mediasIds } = req.body;
    const articles = await Article.find({ _id: { $in: articlesIds } });
    const books = await Book.find({ _id: { $in: booksIds } });
    const medias = await Content.find({ _id: { $in: mediasIds } });
    res.status(200).json({ articles, books, medias });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve articles, books, and medias' });
  }
};
// Get all newsletters
exports.getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    res.status(200).json(newsletters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve newsletters' });
  }
};

// Get a single newsletter by ID
exports.getNewsletterById = async (req, res) => {
  try {
    const { id } = req.params;
    const newsletter = await Newsletter.findById(id);
    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }
    res.status(200).json(newsletter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve newsletter' });
  }
};

// Update a newsletter by ID
exports.updateNewsletterById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subject, body } = req.body;
    const newsletter = await Newsletter.findByIdAndUpdate(
      id,
      { title, subject, body },
      { new: true }
    );
    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }
    res.status(200).json(newsletter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update newsletter' });
  }
};

// Delete a newsletter by ID
exports.deleteNewsletterById = async (req, res) => {
  try {
    const { id } = req.params;
    const newsletter = await Newsletter.findByIdAndRemove(id);
    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }
    res.status(200).json({ message: 'Newsletter deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete newsletter' });
  }
};
