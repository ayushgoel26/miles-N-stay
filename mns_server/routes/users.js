const mongoose = require("mongoose");
var express = require('express');
var router = express.Router();

const mongoDB = "mongodb://localhost:27017/milesNstay";

mongoose.connect(mongoDB).then((dbo) => {
	console.log("DB connected")
}, (err) => {
	console.log("error")
	console.error(err)
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*Post the Sign Up Form*/
router.post('/signup', function(req,res){
  console.log(req.body);
  res.json("success");
})

module.exports = router;
