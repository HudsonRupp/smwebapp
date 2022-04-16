var express = require('express');
var router = express.Router();
var Post = require('../schemas/post.js');
var Account = require('../schemas/account.js')

var auth = function(req, res, next) {
    if (req.session.name) {
        next();
    } else {
        return res.sendStatus(403);
    }
}

router.get("/", function(req, res, next) {
    res.json('api');
});

router.get('/feed', auth, function(req, res, next) {
    Post.find({}).sort({dateCreated: -1}).lean().exec(function(err, posts) {
        if (!err) {
            res.send(JSON.stringify(posts));
        } else {
            console.log(err);
        }
    });
});

router.post('/post', auth, function(req, res, next) {

    var np = new Post({
        'author': req.session.name,
        'message': req.body.message,
    });

    np.save();
    res.json({"status":"success"});
});

module.exports = router;