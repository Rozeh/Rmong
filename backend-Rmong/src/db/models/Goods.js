const mongoose = require('mongoose');
const { Schema } = mongoose;

const Goods = new Schema({
  title: String,
  publishedDate: Date,
  price: Number,
  img: String,
  tags:[String],
  createAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Goods', Goods);
