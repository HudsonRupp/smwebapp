var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    if (!req.session.name) {
        res.redirect('/login');
    } else {
        res.render('home', {message: "Welcome: " + req.session.name});
    }
});

module.exports = router;