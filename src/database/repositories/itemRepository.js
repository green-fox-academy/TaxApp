const Account = require('../models/accountModel');

const findAll = () => Account.find().exec();
const addOrRemove = async (amount, id, shouldTake) => {
  const doc = await Account.findById(id);
  shouldTake ? (doc.money -= amount) : (doc.money += amount);
  return doc.save();
};

module.exports = {
  findAll,
  addOrRemove,
};
