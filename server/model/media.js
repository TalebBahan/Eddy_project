//content model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mediaSchema = new Schema({
    h_text: { type: String, required: true },
    s_text: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required:false },
    date: { type: Date, required: false },
    interests: { type: [String], required: false },

});

var Media = mongoose.model('media', mediaSchema);

module.exports = Media;
