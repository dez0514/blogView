const mongoose = require("mongoose");
const moment = require("moment");
const Counter = require("./counter");

const ArticleSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    require: true
  },
  banner: { type: String },
  title: { type: String },
  content: { type: String },
  author: { type: String },
  tags: { type: String },
  createTime: { type:Date,default: Date.now ,get: v => moment(v).format('YYYY-MM-DD HH:mm:ss')},
  updateTime: { type:Date,default: Date.now ,get: v => moment(v).format('YYYY-MM-DD HH:mm:ss')}
},{ versionKey: false ,timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }})
ArticleSchema.set('toJSON',{getters : true});

ArticleSchema.pre('save', function (next) {
  let doc = this;
  Counter.findByIdAndUpdate(
    { _id: 'entityid' }, 
    { $inc: { sequence_value: 1 } }, 
    { new: true, upsert: true }, 
    function (error, counter) {
      if (error) {
        return next(error);
      }
      doc.id = counter.sequence_value;
      next();
    }
  );
});


module.exports = mongoose.model('Article', ArticleSchema, 'articles') // 第三个参数为集合名称，可省略。默认是将第一个参数转化成小写加s
