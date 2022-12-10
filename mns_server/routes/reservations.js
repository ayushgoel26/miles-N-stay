const mongoose = require("mongoose");
const express = require('express');
const ReservationSchema = require("../mongo_schemas/ReservationSchema")

var router = express.Router();
const mongoDB = "mongodb://localhost:27017/milesNstay";

mongoose.connect(mongoDB).then((dbo) => {
    console.log("DB connected")
}, (err) => {
    console.log("error")
    console.error(err)
});

// const validate_json_key = (key, jsonData, isRequired) ={
//     if (jsonData[key]) {
//         jsonData[key] = mongoose.Types.ObjectId(req.body['host_id'])
//         return jsonData
//     } else {
//         return res.status(500).send({'error': 'host_id is required'})
//     }
// }

router.post('/', (req, res) => {
    const Reservations = mongoose.model("reservations", ReservationSchema);
    if ("receipt_id" in req.body) {
        req.body['receipt_id'] = mongoose.Types.ObjectId(req.body['receipt_id'])
    }
    
    if ("transaction_id" in req.body) {
        req.body['transaction_id'] = mongoose.Types.ObjectId(req.body['transaction_id'])
    }

    if ("host_id" in req.body) {
        req.body['host_id'] = mongoose.Types.ObjectId(req.body['host_id'])
    } else {
        return res.status(500).send({'error': 'host_id is required'})
    }

    if ("guest_id" in req.body) {
        req.body['guest_id'] = mongoose.Types.ObjectId(req.body['guest_id'])
    } else {
        return res.status(500).send({'error': 'guest_id is required'})
    }

    if ("property_id" in req.body) {
        req.body['property_id'] = mongoose.Types.ObjectId(req.body['property_id'])
    } else {
        return res.status(500).send({'error': 'property_id is required'})
    }
    
    Reservations.create(req.body, (err, reservation) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err)
        }
        res.send({'id': reservation._id})
    });
});

module.exports = router;
