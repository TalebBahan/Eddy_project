//content model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contentSchema = new Schema({

    title: { type: String, required: true },
    content: { type: String, required: true },
    platform: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'users' }

});

var Content = mongoose.model('contents', contentSchema);

module.exports = Content;
