const mongoose = require("mongoose");
const multer = require("multer");
var express = require("express");
var router = express.Router();

const mongoDB = "mongodb://localhost:27017/milesNstay";
const upload = multer({ dest: "uploads/" });

mongoose.connect(mongoDB).then(
  (dbo) => {
    console.log("DB connected");
  },
  (err) => {
    console.log("error");
    console.error(err);
  }
);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/*Post the Sign Up Form*/
router.post("/signup", upload.single("file"), function (req, res) {
  console.log(req.file);
  console.log(JSON.parse(req.body.data));
  res.json("success");
});

module.exports = router;
