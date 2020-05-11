var express = require('express');
var router = express.Router();
var uid = require('uid');
const { v4: uuidv4 } = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "express", uid: uuidv4()});
});

module.exports = router;
