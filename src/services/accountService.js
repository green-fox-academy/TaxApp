const accountRepository = require('../database/repositories/taxRepository');

const findAll = () => accountRepository.findAll();
const transfer = (fromId, toId, amount) => {
  return accountRepository.addOrRemove(amount, fromId, true).then(() => accountRepository.addOrRemove(amount, toId, false));
};

module.exports = {
  findAll,
  transfer,
};
