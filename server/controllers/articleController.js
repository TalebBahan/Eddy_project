// articleController.js

const Article = require('../model/article');

// Create a new article
const createArticle = async (req, res) => {
  try {
    req.body.imageUrl = req.file.filename;
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the article' });
  }
};

// create article without image
const createArticleWithoutImage = async (req, res) => {
  try {
    const { title, body, link } = req.body;
    const article = new Article({ title, body, link, imageUrl: null  });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    console.log(error); 
    res.status(500).json({ error: 'Failed to create the article' });
  }
};

// Get all articles
const getArticles = async (req, res) => {
  try {
    // latest first
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the articles' });
  }
};

// Get a single article
const getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the article' });
  }
};

// Update an article
const updateArticle = async (req, res) => {
  try {
    if (req.file) {
      req.body.imageUrl = req.file.filename;
    }
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the article' });
  }
};

// Delete an article
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the article' });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
  createArticleWithoutImage
};
