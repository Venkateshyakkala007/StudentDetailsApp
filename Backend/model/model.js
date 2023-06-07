const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  RollNum: {
    required: true,
    type: Number,
  },
  Name: {
    required: true,
    type: String,
  },
  Group: {
    required: true,
    type: String,
  },
  PhoneNum: {
    required: true,
    type: Number,
  },
  Email: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("StudentData", dataSchema);
