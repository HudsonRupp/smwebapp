var express = require('express');
var router = express.Router();
var Account = require('../schemas/account.js')

router.get("/", function(req, res, next) {
    res.render("register", {message: 'yuh'});
});

router.post("/", function(req, res, next) {
    console.log(req.body.username + " " + req.body.password);
    Account.exists({'username': req.body.username}, function(err, doc) {
        if (doc) {
            res.render('register', {message: 'account already exists'})
        } else {
            var nAcc = new Account({'username': req.body.username, 'password': req.body.password});
            nAcc.save();
            res.redirect('login')
        }
    })
    console.log("REGISTER " + req.body.username + " " + req.body.password);
});

module.exports = router;