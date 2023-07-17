//content model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contentSchema = new Schema({

    h_text: { type: String, required: true },
    s_text: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required:false },
    // set date format dd/mm/yyyy 
    date: { type: Date, required: false },

    type: { type: String, required: true }

});

var Content = mongoose.model('contents', contentSchema);

module.exports = Content;
