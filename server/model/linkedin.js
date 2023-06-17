const mongoose = require('mongoose');
const linkdin = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true, 
    },
    postImage: {
        type: String,
    },
});

module.exports = mongoose.model('linkdin', linkdin);