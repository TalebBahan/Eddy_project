const mongoose = require('mongoose');

const restSchema = new mongoose.Schema({
    type: String,
    count: Number,
});
const achievementSchema = new mongoose.Schema({
    category: String,
    rest: [restSchema],
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;
