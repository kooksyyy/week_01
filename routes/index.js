var express = require('express');
var router = express.Router();

const nameList = [
{ 'id':  1, 'name' : 'John', 'email' : 'aaa'},
{ 'id':  2, 'name' : 'James', 'email' : 'abc'},
{ 'id':  3, 'name' : 'Krizz', 'email' : 'def'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub: 'ABC', names: nameList });
});

module.exports = router;
