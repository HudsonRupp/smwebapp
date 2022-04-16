var mongoose = require('mongoose')
const Account = require('./account').schema

var postSchema = new mongoose.Schema({
    author: String,
    message: String,
    dateCreated: {type: Date, default: Date.now},
    parentPost: {type: mongoose.ObjectId, default: undefined},
    comments: [mongoose.ObjectId]
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;