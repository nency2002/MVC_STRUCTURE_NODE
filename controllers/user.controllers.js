const use = require("../models/user.schema")

const user = async (req, res) => {
    let data = await use.find();
    res.send(data)
}

const createUser = async (req, res) => {
    let data = await use.create(req.body);
    res.send(data)
}
const ui = (req, res) => {
    res.render("index")
}




module.exports ={user , createUser ,ui}
