const express = require('express');
const router = express.Router();

const log ='admin';
const haslo ='123';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dane z redera_1' ,cosik: 'Dane do rendera_2'});
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Dane z redera_1' ,cosik: 'Dane do rendera_2'});
});

router.post('/login', function(req, res) {
  req.session.admin=1;
 const {login,password}  =req.body;

    if(log===login && password===haslo){
      res.redirect('./admin');
    }
    else{ res.redirect('./login');}
});

module.exports = router;
