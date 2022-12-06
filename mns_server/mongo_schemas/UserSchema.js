const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    title: {
      type: String,
      enum: ["Mr.", "Mrs.", "Ms.", "Jr.", "Dr."],
    },
    first_name: {
      type: String,
      required: true,
    },
    middle_name: {
      type: String,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
  },
  date_joined: {
    type: Date,
    default: Date.now,
  },
  contact: {
    email: {
      type: String,
      match:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      required: true,
    },
    phone: {
      type: String,
      match: /^[0-9]{10}$/,
      required: true,
    },
    emergency: {
      type: String,
      match: /^[0-9]{10}$/,
      required: true,
    },
  },
});
