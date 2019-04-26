const accountService = require('../services/accountService');

const findAll = (req, res) => {
  accountService
    .findAll()
    .then(account => res.json(account))
    .catch(err => res.json(err));
};

const transfer = (req, res) => {
  const { fromId, toId, amount } = req.body;
  accountService.transfer(fromId, toId, amount).then(doc => res.json(doc));
};

module.exports = {
  findAll,
  transfer,
};
