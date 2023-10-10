const mongoose = require('mongoose');
require("dotenv").config()
let url = process.env.DB_URL
const connect = async () =>{
    await mongoose.connect(url)
    console.log("connecting to mongodb")
}

module.exports= connect