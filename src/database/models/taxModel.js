const mongoose = require('mongoose');

const taxSchema = mongoose.Schema({
  rate: { type: Number, default: 0.2 },
});

module.exports = mongoose.model('Tax', taxSchema);
