const express = require('express');
const connect = require('./config/db');
const rount = require('./routes/user.route');
const app = express();
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(rount)
app.use(express.json());

app.listen(8090 ,() => {
    connect()
    console.log("listening on 9999");
});