const express = require('express');
const { NotExtended } = require('http-errors');
const router = express.Router();

/* GET home page. */
router.all("*",(req,res,next)=>{
 if(!req.session.admin){
   res.redirect('login');
   return;
 }

 next();
});

router.get('/', function(req, res) {
  console.log(req.session.admin);
  res.render('admin', { title: 'Admin'});
});

module.exports = router;
