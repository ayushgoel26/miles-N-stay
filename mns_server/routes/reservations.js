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
const Reservations = mongoose.model("reservations", ReservationSchema);

router.get('/', (req, res) => {
    Reservations.find(
        {},
        (err, reservations) => {
            if (err) {
                console.log(err);
            } else {
                res.json(reservations);
            }
            return;
        }
    );
});

router.post('/', (req, res) => {
    console.log(req.body)

    if ("receipt_id" in req.body) {
        req.body['receipt_id'] = mongoose.Types.ObjectId(req.body['receipt_id'])
    }

    if ("transaction_id" in req.body) {
        req.body['transaction_id'] = mongoose.Types.ObjectId(req.body['transaction_id'])
    }

    if (!("property_name" in req.body)) {
        return res.status(500).send({ 'error': 'property_name is required' })
    }

    if ("host_id" in req.body) {
        req.body['host_id'] = mongoose.Types.ObjectId(req.body['host_id'])
    } else {
        return res.status(500).send({ 'error': 'host_id is required' })
    }

    if ("guest_id" in req.body) {
        req.body['guest_id'] = mongoose.Types.ObjectId(req.body['guest_id'])
    } else {
        return res.status(500).send({ 'error': 'guest_id is required' })
    }

    if ("property_id" in req.body) {
        req.body['property_id'] = mongoose.Types.ObjectId(req.body['property_id'])
    } else {
        return res.status(500).send({ 'error': 'property_id is required' })
    }


    // Find documents in the collection where the date range overlaps with the input range
    Model.find({
        $and: [
            {
                $or: [
                    // The start date of the input range falls within the document's date range
                    { start_date: { $lte: req.body.start_date }, end_date: { $gte: req.body.start_date } },
                    // The end date of the input range falls within the document's date range
                    { start_date: { $lte: req.body.end_date }, end_date: { $gte: req.body.end_date } },
                    // The input range completely encloses the document's date range
                    { start_date: { $gte: start_date }, end_date: { $lte: end_date } },
                ],
            },
            // The document's date range completely encloses the input range
            { start_date: { $lte: start_date }, end_date: { $gte: end_date } },
        ],
    })
        .then((docs) => {
            console.log(docs)
            // Do something with the matching documents
        })
        .catch((err) => {
            console.log(err)
            // Handle any errors
        });

    console.log(req.body)
    Reservations.create(req.body, (err, reservation) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err)
        }
        res.send({ 'id': reservation._id })
    });
});

router.delete('/:id', (req, res) => {
    Reservations.deleteOne(
        { "_id": req.params.id },
        (err, reservations) => {
            if (err) {
                console.log(err);
            } else {
                res.json(reservations);
            }
            return;
        }
    );
});

module.exports = router;
