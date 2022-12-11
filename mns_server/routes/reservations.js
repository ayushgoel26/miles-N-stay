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

    console.log(req.body)
    startDate = req.body.start_date;
    endDate = req.body.end_date;
    isAvailable = true
    Reservations.find({
        $or: [
            { start_date: { $lte: startDate }, end_date: { $gte: startDate } },
            { start_date: { $lte: endDate }, end_date: { $gte: endDate } },
            { start_date: { $gte: startDate }, end_date: { $lte: endDate } },
            { start_date: { $lte: startDate }, end_date: { $gte: endDate } },
        ],
    })
        .then((docs) => {
            console.log('--------')
            console.log(docs)
            if (docs.length > 0) {
                isAvailable = !isAvailable
                return res.status(500).send({ 'msg': 'Dates not available' })
            }
        }).then(() => {
            if (isAvailable) {
                Reservations.create(req.body, (err, reservation) => {
                    if (err) {
                        return res.status(500).send(err)
                    }
                    console.log(`reservation created [${reservation._id}]`)
                    return res.status(200).send({ 'msg': 'Reservation successful' })
                });
            }
        })
        .catch((err) => {
            console.log(err)
            return res.status(500).send({ 'msg': err })
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
