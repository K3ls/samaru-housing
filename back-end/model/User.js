const mongoose = require("mongoose");
const Schema = mongoose.Schema

const User = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  
})