const mongoose = require("mongoose");
//记录 article id 自增的集合
const CounterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 0 }
});

module.exports = mongoose.model('Counter', CounterSchema, 'counters')
