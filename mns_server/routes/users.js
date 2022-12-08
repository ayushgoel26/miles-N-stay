const mongoose = require("mongoose");
const multer = require("multer");
var express = require("express");
var router = express.Router();
const UserSchema = require("../mongo_schemas/UserSchema");
const axios = require("axios");

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

/*Post the Sign Up Form*/
router.post("/signup", upload.single("file"), async function (req, res) {
  const user = mongoose.model("user", UserSchema);
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

router.get("/:username", function (req, res) {
  const user = mongoose.model("user", UserSchema);
  user.find(
    {
      username: req.params.username,
    },
    (err, user_data) => {
      if (err) {
        console.log(err);
        return;
      }
      if (user_data.length == 0) {
        res.json("does not exists");
      } else {
        res.json("exists");
      }
    }
  );
});

module.exports = router;
