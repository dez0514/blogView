const mongoose = require("mongoose");

const TagsSchema = new mongoose.Schema({
  tagname: { type: String,unique:true },
  color: { type: String }
},{ versionKey: false })

module.exports = mongoose.model('Tag', TagsSchema, 'tags') // 第三个参数为集合名称，可省略。默认是将第一个参数转化成小写加s
