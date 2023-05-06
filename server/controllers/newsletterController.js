const Newsletter = require('../model/newsletter');

// Create a new newsletter





exports.createArticle = async (req, res) => {
  
  try {
    const { id } = req.params;
    const  { title, body, readMoreLink } = req.body;
    const imageUrl = req.file.filename
    const newsletter = await Newsletter.findById(id);
    newsletter.articles.push({ title, body, imageUrl, readMoreLink });
    await newsletter.save();
    return res.status(200).json(newsletter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.createNewsletter = async (req, res) => {
  try {
    const newsletter = new Newsletter({
      title: req.body.title,
      coverImageUrl: req.file.filename,
      articles: req.body.articles,
      layout: req.body.layout,
      scheduledTime: req.body.scheduledTime,
    });
    const savedNewsletter = await newsletter.save();
    res.status(201).json(savedNewsletter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all newsletters
exports.getNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    res.status(200).json(newsletters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a newsletter by ID
exports.getNewsletterById = async (req, res) => {
  try {
    const newsletter = await Newsletter.findById(req.params.id);
    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }
    res.status(200).json(newsletter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a newsletter by ID
exports.updateNewsletterById = async (req, res) => {
  try {
    const newsletter = await Newsletter.findById(req.params.id);
    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }
    newsletter.title = req.body.title;
    newsletter.coverImageUrl = req.body.coverImageUrl;
    newsletter.articles = req.body.articles;
    newsletter.layout = req.body.layout;
    newsletter.scheduledTime = req.body.scheduledTime;
    const savedNewsletter = await newsletter.save();
    res.status(200).json(savedNewsletter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a newsletter by ID
exports.deleteNewsletterById = async (req, res) => {
  try {
    const newsletter = await Newsletter.findById(req.params.id);
    console.log('====================================');
    console.log(00);
    console.log('====================================');
    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }
    await newsletter.remove();
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
