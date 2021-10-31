var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.json());

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req)
  res.send(req.body);
});

module.exports = router;
