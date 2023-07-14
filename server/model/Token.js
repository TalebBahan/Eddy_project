

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    refreshToken: String,
    state: String,
    googleRefreshToken: String,
    googleAccessToken: String,
    googleState: String,
    googleId: String,
    googleEmail: String,
    googleName: String,
    googlePicture: String,
    linkedinRefreshToken: String,
    linkedinAccessToken: String,
    linkedinExpiresIn: String,
    linkedinRefreshTokenExpiresIn: String,
    linkedinState: String,
    linkedinId: String,
    linkedinEmail: String,
    linkedinName: String,
    linkedinPicture: String,
    json:String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

token = mongoose.model('Token', TokenSchema);
module.exports = token;

