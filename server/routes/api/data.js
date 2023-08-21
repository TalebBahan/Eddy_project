const express = require('express');
const router = express.Router();
const {
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
} = require('../../controllers/data');
const { sendMessage } = require('../../controllers/contact');
const { createSubscriber } = require('../../controllers/subscriberController');
router.get('/', getAll);
router.post('/contact', sendMessage);
router.get('/idTitle', getIdTitle);
router.get('/youtube', getYoutube);
router.get('/content', getContent);
router.get('/aboutImages', getAboutImages);
router.get('/linkedin', getLinkedin);
router.get('/articles', getArticles);
router.get('/books', getBooks);
router.get('/interests', getInterests);
router.get('/media', getMedia);
router.get('/hero', getHero);
router.post('/subscribers', createSubscriber);
router.get('/achievements', getAllAchievements);




module.exports = router;