

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
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema);
// if type is admin then he will have access to all the posts, links and contents as hes owen if its a team member can it be stored in the same table or should i create a new table for team members and then link it to the user table?
