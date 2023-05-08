

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true    
    },
    username: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 0001
        },
        Editor: Number,
        Admin: Number,
        postUser: Number,
        postEditor: Number,
        postAdmin: Number,
        linkUser: Number,
        linkEditor: Number,
        linkAdmin: Number,
        contentUser: Number,
        contentEditor: Number,
        contentAdmin: Number,
    },
    team : {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    password: {
        type: String,
        required: true
    },
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
    linkedinState: String,
    linkedinId: String,
    linkedinEmail: String,
    linkedinName: String,
    linkedinPicture: String,

});

user = mongoose.model('User', userSchema);
module.exports = user;
// user sample  
// {
//     "email": "user@gmail",
//     "username": "user",
//     "roles": {
//         "User": 1,
//         "Editor": 0,
//         "Admin": 0,
//         "postUser": 1,
//         "postEditor": 0,
//         "postAdmin": 0,
//         "linkUser": 1,
//         "linkEditor": 0,
//         "linkAdmin": 0,
//         "contentUser": 1,
//         "contentEditor": 0,
//         "contentAdmin": 0
//     },
//     "password": "user",
//     "googleRefereshToken": "",
//     "googleState": "",
//     "googleId": "",
//     "googleEmail": "",
//     "googleName": "",
//     "googlePicture": ""

// }
// })
