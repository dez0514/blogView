const express = require("express");
const connectDB = require('./config/db')
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
app.get('/', (req, res) => {	　　  
    res.send('api'); 
});

// 连接数据库
connectDB()
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error:${err.message}`.red.bold);
    //关闭服务器 & 退出进程
    process.exit(1)
})

const port = process.env.PORT || 3001;
console.log(`${process.env.PORT}`.magenta.bold)
app.listen(port, () => {
    console.log(`Server rnning in ${process.env.NODE_ENV} mode on port ${port}`.magenta.bold);
});

module.exports = app;