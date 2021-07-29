const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
  const conn = await mongoose.connect('mongodb://127.0.0.1:27017/blog', {
    //避免警告信息
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`.blue.bold);
}

module.exports = connectDB
