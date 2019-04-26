const { findByUserId } = require('../database/repositories/itemRepository');

const calculateByUserId = userId =>
  findByUserId(userId).then(items => items.reduce((sum, { price, taxRate }) => (sum += price * taxRate), 0));

module.exports = {
  calculateByUserId,
};
