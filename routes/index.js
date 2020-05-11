var express = require('express');
var router = express.Router();
var uid = require('uid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "express", uid: uid()});
});

module.exports = router;
