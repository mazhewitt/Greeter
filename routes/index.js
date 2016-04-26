var express = require('express');
var router = express.Router();
renderGreeting = require('./greeter')
/* GET home page. */
router.get('/', function(req, res, next) {
  renderGreeting(req, res);
});

module.exports = router;
