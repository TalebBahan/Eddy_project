const Youtube = require('../model/Youtube');
const Content = require('../model/content');
const AboutImages = require('../model/AboutImage');
const HeroLinks = require('../model/heroLinks')
const linkedin = require('../model/linkedin');
const Article = require('../model/article');
const Book = require('../model/book');
const Interest = require('../model/interest');
// Get all videos, content, and about images
const getAllData = async (req, res) => {
  try {
    const videos = await Youtube.find().sort({ createdAt: -1 });
    const content = await Content.find().sort({ createdAt: -1 });
    const aboutImages = await AboutImages.find().sort({ createdAt: -1 });
    const heroLinks = await HeroLinks.find().sort({ createdAt: -1 });
    const linkedinPosts = await linkedin.find().sort({ createdAt: -1 });
    const articles = await Article.find().sort({ createdAt: -1 });
    const books = await Book.find().sort({ createdAt: -1 });
    const interests = await Interest.find().sort({ createdAt: -1 });


    res.status(200).json({ youtube: videos, content, aboutImages,heroLinks,linkedin:linkedinPosts,articles,books ,interests});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get the Id and the title of (articles and books and media coverages and linkedin posts) 

const getIdTitle = async (req, res) => {
  try {
    const articles = await Article.find().sort({ _id: -1 });
    const books = await Book.find().sort({ _id: -1 });
    const linkedinPosts = await linkedin.find().sort({ _id: -1 });
    // get the content of type media
    const media = await Content.find({ type: 'media' }).sort({ _id: -1 });

    // get the id and the title of the media
    const mediaIdTitle = media.map((item) => {
      return { _id: item._id, title: item.h_text };
    });
    const articlesIdTitle = articles.map((article) => {
      return { _id: article._id, title: article.title };
    });
    const booksIdTitle = books.map((book) => {
      return { _id: book._id, title: book.title };
    });
    const linkedinIdTitle = linkedinPosts.map((linkedin) => {
      return { _id: linkedin._id, title: linkedin.title };
    });
    res.status(200).json({ articlesIdTitle, booksIdTitle, linkedinIdTitle,mediaIdTitle });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllData,
  getIdTitle,
};
