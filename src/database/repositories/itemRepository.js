const { connection } = require('../index');

// const Item = require('../models/itemModel');

// const findByUserId = userId => Item.find({ userId }).exec();

const findByUserId = userId =>
  new Promise((resolve, reject) => {
    connection.query('SELECT * FROM items WHERE user_id = ?', [userId], (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(
        rows.map(row => ({
          ...row,
          taxRate: row.taxRate / 100,
        })),
      );
    });
  });

module.exports = {
  findByUserId,
};
