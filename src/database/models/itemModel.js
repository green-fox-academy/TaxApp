const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: Number, required: true },
  price: { type: Number, required: true },
  taxRate: { type: Number, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
