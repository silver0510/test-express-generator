var express = require('express');
var router = express.Router();
var uid = require('uid');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Express", uid: uuidv4(), now: moment().format('MMMM Do YYYY, h:mm:ss a')});
});

module.exports = router;
