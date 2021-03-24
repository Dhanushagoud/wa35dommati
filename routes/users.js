var express = require('express');
var router = express.Router();
var d=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  d+=1;
  res.send('User accesses are: '+d);
});

module.exports = router;
