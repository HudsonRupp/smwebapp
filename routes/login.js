var express = require('express');
var router = express.Router();
var Account = require('../schemas/account.js')

router.get("/", function(req, res, next) {
    console.log("working");
    res.render("login", {message: 'yuh'});
});

router.post("/", function(req, res, next) {
    console.log(req.body.username + " " + req.body.password);
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
    console.log("LOGIN " + req.body.username + " " + req.body.password);
});

module.exports = router;