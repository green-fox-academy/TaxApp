const taxService = require('../services/taxService');

const getTaxByUserId = (req, res) => {
  const { id: userId } = req.query;
  if (!userId) {
    return res.status(400).send('Missing user id');
  }
  taxService.calculateByUserId(userId).then(tax => res.json(tax));
};

module.exports = {
  getTaxByUserId,
};
