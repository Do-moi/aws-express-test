var express = require('express');
var router = express.Router();


var dataBike= [
               {name:"BIKO45", img:"../images/bike-1.jpg",price:"679"},
               {name:"ZOOK07", img:"../images/bike-2.jpg",price:"999"},
               {name:"TITANS", img:"../images/bike-3.jpg",price:"799"},
               {name:"CEWO", img:"../images/bike-4.jpg",price:"1300"},
               {name:"AMIG39", img:"../images/bike-5.jpg",price:"479"},
               {name:"LIK099", img:"../images/bike-6.jpg",price:"869"}
]

var dataCardBike= [];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBike});
});
router.get('/shop', function(req, res, next) {
  console.log('=====/shop',req.query)
dataCardBike.push(req.query)
  res.render('shop', { dataCardBike});
});

router.get('/delete', function(req, res, next) {
  console.log('====/delete',req.query.position)
  dataCardBike.splice(req.query.position,1)
  res.render('shop', {dataCardBike});
});

router.post('/qte', function(req, res, next) {
  console.log('====/qte',req.body,"==========",dataCardBike)
  dataCardBike[req.body.position].qte = req.body.quantity
  res.render('shop', {dataCardBike});
});

module.exports = router;
