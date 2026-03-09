const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  price: Number
});

const pedidoSchema = new mongoose.Schema({
  orderId: String,
  value: Number,
  creationDate: Date,
  items: [itemSchema]
});

module.exports = mongoose.model('Pedido', pedidoSchema);
