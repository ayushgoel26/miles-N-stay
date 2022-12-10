const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReviewsSchema = new Schema({
    reviewer : {
        name:{
            type: String,
            required:true
        }
    },
    property:{
        id: mongoose.Schema.Types.ObjectId,
        required : true
    },
    date:{
        type: Date,
        default: Date.now
    },
    rating:{
        type: Number,
        required:true
    },
    comment:{
        type: String,
        required:true
    }

});

module.exports = ReviewsSchema;
