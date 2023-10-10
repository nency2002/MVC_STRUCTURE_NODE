const {Router} = require('express');
const { user, createUser, ui } = require('../controllers/user.controllers');
const check = require('../middleware/user.middlel');
const rount = Router();

rount.get("/" ,user)
rount.post("/" ,check,createUser)
rount.get("/ui" ,ui)

module.exports = rount
