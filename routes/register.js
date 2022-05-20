var express = require('express');
var router = express.Router();
var Account = require('../schemas/account.js')

router.get("/", function(req, res) {
    res.render("register", {message: ''});
});

router.post("/", function(req, res) {
    Account.exists({'username': req.body.username}, function(err, doc) {
        if (doc) {
            res.render('register', {message: 'account already exists'})
        } else {
            var nAcc = new Account({'username': req.body.username, 'password': req.body.password});
            nAcc.save();
            res.redirect('login')
        }
    })
});

module.exports = router;