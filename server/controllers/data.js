const Youtube = require('../model/Youtube');
const Content = require('../model/content');
const AboutImages = require('../model/AboutImage');
const linkedin = require('../model/linkedin');
const Article = require('../model/article');
const Book = require('../model/book');
const Interest = require('../model/interest');
const Media = require('../model/media');
const Hero = require('../model/hero');
const Achievement = require('../model/achievement');
// get youtube

const getAll = async (req, res) => {
  try {
    const youtube = await Youtube.find().sort({ _id: -1 });
    const articles = await Article.find().sort({ _id: -1 });
    const books = await Book.find().sort({ _id: -1 });
    const media = await Media.find().sort({ _id: -1 });

    // get an array of interests from each book and article and media
    const interestsB = books.map((book) => book.interests);
    const interestsA = articles.map((article) => article.interests);
    const interestsM = media.map((media) => media.interests);
    // const linkedin = await linkedin.find().sort({ _id: -1 });

    res.status(200).json({ youtube, linkedin, articles, books, media, interests: [...interestsB, ...interestsA, ...interestsM] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ _id: 1 });
    res.status(200).json(achievements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getYoutube = async (req, res) => {
  try {
    const videos = await Youtube.find().sort({ _id: -1 });
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get content
const getContent = async (req, res) => {
  try {
    const content = await Content.find().sort({ _id: -1 });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get about images

const getAboutImages = async (req, res) => {
  try {
    const aboutImages = await AboutImages.find().sort({ _id: -1 });
    res.status(200).json(aboutImages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get linkedin

const getLinkedin = async (req, res) => {
  try {
    const linkedinPosts = await linkedin.find().sort({ _id: -1 });
    res.status(200).json(linkedinPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get articles

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ _id: -1 });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get books

const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ _id: -1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get interests

const getInterests = async (req, res) => {
  try {
    const interests = await Interest.find().sort({ _id: -1 });
    res.status(200).json(interests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// get media

const getMedia = async (req, res) => {
  try {
    const media = await Media.find().sort({ _id: -1 });
    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getHero = async (req, res) => {
  try {
    const hero = await Hero.find();
    res.json(hero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};







const getIdTitle = async (req, res) => {
  try {
    const articles = await Article.find().sort({ _id: -1 });
    const books = await Book.find().sort({ _id: -1 });
    const linkedinPosts = await linkedin.find().sort({ _id: -1 });
    const media = await Media.find().sort({ _id: -1 });

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
    res.status(200).json({ articlesIdTitle, booksIdTitle, linkedinIdTitle, mediaIdTitle });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getIdTitle,
  getYoutube,
  getContent,
  getAboutImages,
  getLinkedin,
  getArticles,
  getBooks,
  getInterests,
  getMedia,
  getHero,
  getAll,
  getAllAchievements


};
