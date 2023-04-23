//Links model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var linksSchema = new Schema({

    title: { type: String, required: true },
    content: { type: String, required: true },
    platform: { type: String, required: true },
    url: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'users' }
    
});

var Links = mongoose.model('links', linksSchema);

module.exports = Links;






