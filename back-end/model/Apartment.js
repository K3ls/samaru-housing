const mongoose = require("mongoose");
const Schema = mongoose.Schema

const apartment = new Schema({
  categories: {
    type: String,
    required: true
  },