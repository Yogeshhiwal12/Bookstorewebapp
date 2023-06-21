const mongoose = require("mongoose");
require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString).then(() => console.log("connected"));

module.exports = mongoose;
