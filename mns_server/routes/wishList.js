const mongoose = require("mongoose");
const express = require('express');
var router = express.Router();
const WishListSchema = require("../mongo_schemas/wishListSchema");


const mongoDB = "mongodb://localhost:27017/milesNstay";

mongoose.connect(mongoDB).then((dbo) => {
	console.log("DB connected")
}, (err) => {
	console.log("error")
	console.error(err)
});


router.get('/', (req, res) => {
    

    console.log(req.query);
    const {prop_id,guest_id} = req.query;
    console.log(prop_id)
	const WishList = mongoose.model("wishlist", WishListSchema);

	WishList.findOne({property_id: prop_id, guest_id: guest_id}, (err, wishlist) => {
			if (err) {
				console.log(err);
				return res.status(500).send(err)
			}
            
			res.send(wishlist)
  });
});

router.post('/', (req, res) => {

    console.log(req.query);
	const WishList = mongoose.model("wishlist", WishListSchema);

	WishList.create(req.body, (err, wishlist) => {
			if (err) {
				console.log(err);
				return res.status(500).send(err)
			}
            
			res.send(wishlist)
  });
});

  router.get('/delete', (req, res) => {

    console.log(req.query);
	const WishList = mongoose.model("wishlist", WishListSchema);
	const {prop_id,guest_id} = req.query;

	WishList.deleteMany({
	$and:[
        {guest_id : guest_id},
        {property_id: prop_id}
    ]},
	  (err, wishlist) => {
		if (err) {
		  console.log(err);
		} else {
		  res.json(wishlist);
		}
		return;
	  }
	);
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
  console.log(req.query);
  const Listings = mongoose.model("properties", ListingSchema);
  if (city === undefined) {
    var city = "";
  } else {
    var city = decodeURI(req.query.city);
  }
  if (type === undefined) {
    var type = "";
  } else {
    var type = req.query.type;
  }
  if (endDate === undefined) {
    var endDate = "";
  } else {
    var endDate = req.query.endDate;
  }
  if (startDate === undefined) {
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
	Listings.findById(
		id,
	  (err, listing) => {
		if (err) {
		  console.log(err);
		} else {
		  res.json(listing);
		}
		return;
	  }
	);
  });


  router.post('/reviews', (req, res) => {
    console.log("inside review post")
    console.log(req.body)
    const Reviews = mongoose.model("reviews", ReviewsSchema);
		Reviews.create(req.body, (err, reviews) => {
			if (err) {
				console.log(err);
				return res.status(500).send(err)
			}
            
			res.send(reviews)
		});
});

router.get("/reviews/:id", function (req, res) {
	console.log(req.query);
	const Reviews = mongoose.model("reviews", ReviewsSchema);
	const { id } = req.params;
  console.log(id)

	Reviews.find(
		{property_id: id},
	  (err, reviews) => {
		if (err) {
		  console.log(err);
		} else {
		  res.json(reviews);
		}
		return;
	  }
	);
  });


router.post('/save-image', (req,res) => {
	console.log('Got a post request')
	res.send('Got a post request')
})

module.exports = router;
