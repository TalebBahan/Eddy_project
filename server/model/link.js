//Links model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var linksSchema = new Schema({

    text: { type: String, required: true },
    link: { type: String, required: true },
    platform: { type: String, required: true },
    is_active: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

var Links = mongoose.model('links', linksSchema);

module.exports = Links;






