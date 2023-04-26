//content model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contentSchema = new Schema({

    h_text: { type: String, required: true },
    s_text: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required:false },
    data: { type: Date, default: Date.now },
    type: { type: String, required: true }

});

var Content = mongoose.model('contents', contentSchema);

module.exports = Content;
