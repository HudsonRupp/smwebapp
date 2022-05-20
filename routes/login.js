var express = require('express');
var router = express.Router();
var Account = require('../schemas/account.js')

router.get("/", function(req, res) {
    res.render("login", {message: ''});
});

router.post("/", function(req, res) {
    Account.findOne({'username': req.body.username}, function(err, doc) {
        if (err) console.error(err)
        if (!doc) {
            res.render('login', {message: 'incorrect user/pass'})
        } else {
            if (req.body.password == doc.password) {
                req.session.name = doc.username;
                req.session.save();
                res.redirect('/home');
            } else {
                res.render('login', {message: 'incorrect user/pass'})
            }
        }
    })
});

module.exports = router;