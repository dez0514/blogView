const express = require("express");
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const api = require('./router/api');
const app = express();

dotenv.config({
  path: path.join(__dirname, './config/config.env')
});

// 跨域设置
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(morgan("dev"))
app.use('/api',api)
app.use('/serverImage', express.static(path.join(__dirname, 'serverImage')));
app.get('/', (req, res) => {	　　  
    res.send('api'); 
});

const port = process.env.PORT;
// console.log(`${process.env.PORT}`.magenta.bold)
app.listen(port, () => {
    console.log(`Server rnning in ${process.env.NODE_ENV} mode on port ${port}`.magenta.bold);
});

module.exports = app;