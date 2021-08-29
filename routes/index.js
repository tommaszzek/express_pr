var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dane z redera_1' ,cosik: 'Dane do rendera_2'});
});

module.exports = router;
