var express = require('express');
var router = express.Router();
var path = require('path')

// GET the home page
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

module.exports = router;