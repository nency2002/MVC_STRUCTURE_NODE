
const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    username:String,
    number:Number,
    email:String,
    password:String
})

const use = mongoose.model("use",userSchema)

module.exports = use