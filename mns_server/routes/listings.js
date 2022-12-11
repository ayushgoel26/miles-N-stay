const mongoose = require("mongoose");
const express = require("express");
var router = express.Router();
const ListingSchema = require("../mongo_schemas/listingSchema");
const ReviewsSchema = require("../mongo_schemas/ReviewsSchema");
const multer = require("multer");
const fs = require("fs");
const { response } = require("express");

const multi_upload = multer({
  dest: "../mns_client/public/img/propertyImages/",
}).array("file", 10);

const mongoDB = "mongodb://localhost:27017/milesNstay";

mongoose.connect(mongoDB).then(
  (dbo) => {
    console.log("DB connected");
  },
  (err) => {
    console.log("error");
    console.error(err);
  }
);

router.post("/", (req, res) => {
  console.log("inside post endpoint");
  console.log(req.body);
  const Listings = mongoose.model("properties", ListingSchema);
  Listings.create(req.body, (err, listings) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.send(listings);
  });
});

mongoose.connect(mongoDB).then(
  (dbo) => {
    console.log("DB connected");
  },
  (err) => {
    console.log("Unable to connect to DB");
    console.error(err);
  }
);

router.get("/", function (req, res) {
  const Listings = mongoose.model("properties", ListingSchema);
  if (req.query.city === undefined) {
    var city = "";
  } else {
    var city = decodeURI(req.query.city);
  }
  if (req.query.type === undefined) {
    var type = "";
  } else {
    var type = req.query.type;
  }
  if (req.query.endDate === undefined) {
    var endDate = "";
  } else {
    var endDate = req.query.endDate;
  }
  if (req.query.startDate === undefined) {
    var startDate = "";
  } else {
    var startDate = req.query.startDate;
  }
  Listings.find(
    {
      property_type: { $regex: type, $options: "i" },
      "property_address.city": { $regex: city, $options: "i" },
    },
    (err, listings) => {
      if (err) {
        console.log(err);
      } else {
        console.log(listings.length);
        res.json(listings);
      }
      return;
    }
  );
});

router.get("/:id", function (req, res) {
  console.log(req.query);
  const Listings = mongoose.model("properties", ListingSchema);
  const { id } = req.params;
  Listings.findById(id, (err, listing) => {
    if (err) {
      console.log(err);
    } else {
      res.json(listing);
    }
    return;
  });
});

router.post("/reviews", (req, res) => {
  console.log("inside review post");
  console.log(req.body);
  const Reviews = mongoose.model("reviews", ReviewsSchema);
  Reviews.create(req.body, (err, reviews) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.send(reviews);
  });
});

router.get("/reviews/:id", function (req, res) {
  console.log(req.query);
  const Reviews = mongoose.model("reviews", ReviewsSchema);
  const { id } = req.params;
  console.log(id);

  Reviews.find({ property_id: id }, (err, reviews) => {
    if (err) {
      console.log(err);
    } else {
      res.json(reviews);
    }
    return;
  });
});

//   router.post("/save-image",upload.single('image'), function (req, res) {
// 	try {
// 		fs.writeFileSync(`assets/upload/${req.file.name}`, req.file);

// 		const imageUrl = `http://localhost:3000/assets/uploads/${req.file.filename}`;
// 		res.send(imageUrl);
// 	}  catch (error) {
// 		res.status(500).send(error.message);
// 	  }
//   });

router.post("/save-image", (req, res) => {
  multi_upload(req, res, function (err) {
    console.log(req.files);
    var response = [];
    if (req.files.length > 0) {
      for (var i = 0; i < req.files.length; i++) {
        response.push(req.files[i].filename);
      }
    }
    if (err instanceof multer.MulterError) {
      console.log(err);
      res
        .status(500)
        .send({
          error: { msg: `multer uploading error: ${err.message}` },
        })
        .end();
      return;
    } else if (err) {
      //unknown error
      if (err.name == "ExtensionError") {
        res
          .status(413)
          .send({ error: { msg: `${err.message}` } })
          .end();
      } else {
        res
          .status(500)
          .send({ error: { msg: `unknown uploading error: ${err.message}` } })
          .end();
      }
      return;
    }
    res.json(response);
  });
});

module.exports = router;
