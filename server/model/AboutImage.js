//content model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AboutImagesSchema = new Schema({

    image: { type: String, required: true },
    data: { type: Date, default: Date.now },

});

var AboutImages = mongoose.model('aboutimages', AboutImagesSchema);

module.exports = AboutImages;