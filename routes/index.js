const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dane z redera_1' ,cosik: 'Dane do rendera_2'});
});

module.exports = router;
