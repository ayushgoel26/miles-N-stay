const mongoose = require("mongoose");
const multer = require("multer");
var express = require("express");
var router = express.Router();
const UserSchema = require("../mongo_schemas/UserSchema");

const mongoDB = "mongodb://localhost:27017/milesNstay";
const upload = multer({ dest: "assets/uploads/verifications" });

mongoose.connect(mongoDB).then(
  (dbo) => {
    console.log("DB connected");
  },
  (err) => {
    console.log("error");
    console.error(err);
  }
);

const user = mongoose.model("user", UserSchema);

/*Post the Sign Up Form*/
router.post("/signup", upload.single("file"), async function (req, res) {
  data = JSON.parse(req.body.data);
  if (req.file) {
    data["govt_id_url"] = req.file.path;
  }
  // const response = await axios.get(
  //   "https://nominatim.openstreetmap.org/search?country=" + data.address.country
  // );
  // console.log(response.data);
  user.create(data, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json("success");
  });
});

router.get("/:type/:value", function (req, res) {
  key = req.params.type;
  let mongo_find_query = {};
  if (key === "username") {
    mongo_find_query = { username: req.params.value };
  } else if (key === "email") {
    mongo_find_query = { email: req.params.value };
  } else {
    if (key === "phone") {
      mongo_find_query = { phone: req.params.value };
    }
  }
  user.find(mongo_find_query, (err, user_data) => {
    if (err) {
      console.log(err);
      return;
    }
    if (user_data.length == 0) {
      res.json("does not exists");
    } else {
      res.json("exists");
    }
  });
});

router.post("/", function (req, res) {
  console.log(req.body);
  data = req.body;
  console.log(data.username);
  user.find({ user: data.username }, (err, user_data) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      if (user_data.length == 0) {
        res.json("login failed");
      } else {
        if (data.password === user_data[0].password) {
          res.json("login successful");
        } else {
          res.json("login failed");
        }
      }
    }
  });
});

module.exports = router;
