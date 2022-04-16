var mongoose = require('mongoose')

var accountSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    dateCreated: {type: Date, default: Date.now},
    posts: [mongoose.ObjectId],
    following: [{accountName: String}]
})

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;