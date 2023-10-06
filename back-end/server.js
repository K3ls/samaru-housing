// const dotenv = require("dotenv").config({path: "config.env"});
const mongoose = require("mongoose");
const express = require("express");
const app = express()

mongoose
.connect("mongodb://localhost:27017/back-end",{
  useNewUrlparser:true,
})
.then(() => console.log("DB connection successful"));

const port = 3000;
app.listen(port, () => {
  console.log(`App STARTED ON PORT ${port}`);
});