const mongoose = require("mongoose");
const express = require('express');
var router = express.Router();
const ListingSchema = require("../mongo_schemas/ListingSchema")

const mongoDB = "mongodb://localhost:27017/milesNstay";

mongoose.connect(mongoDB).then((dbo) => {
	console.log("DB connected")
}, (err) => {
	console.log("error")
	console.error(err)
});

router.get('/', function (req, res) {
	const Listings = mongoose.model("properties", ListingSchema);
	var city = decodeURI(req.query.city) || ''
	var type = req.query.type || ''
	console.log(city)
		Listings.find({
			"property_type": { "$regex": type, "$options": "i" },
			"property_address.city": { "$regex": city, "$options": "i" },
		}, (err, listings) => {
			if (err) {
				console.log (err);
				return
			}
			res.json(listings);
		});
});



router.post('/', (req, res) => {
    console.log("inside post endpoint")
    console.log(req.body)
    const Listings = mongoose.model("properties", ListingSchema);
		Listings.create(req.body, (err, listings) => {
			if (err) {
				console.log(err);
				return res.status(500).send(err)
			}
            
			res.send(listings)
		});
});

module.exports = router;