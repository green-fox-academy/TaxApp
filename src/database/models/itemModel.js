const mongoose = require('mongoose');
const tax = require('./taxModel');

const accountSchema = mongoose.Schema({
  name: { type: String, required: true },
  tax: tax.schema.index,
});

module.exports = mongoose.model('Account', accountSchema);
