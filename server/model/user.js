

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
            default: 3000
        },
        content: Number,
        articles: Number,
        books: Number,
        newsletter: Number,
        subscriber: Number,
        youtube: Number,
        linkedin: Number,
        Admin: Number,
    },
    team : {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    password: {
        type: String,
        required: true
    },

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
