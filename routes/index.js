var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if (req.session.name) {
    res.redirect("/home");
  } else {
    res.render('index', {title: "smwebapp"});
  }
});

module.exports = router;
