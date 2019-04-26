const { connection } = require('../index');

const findAll = () =>
  new Promise((resolve, reject) => {
    connection.query('SELECT * FROM accounts', (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });

const addOrRemove = (amount, id, shouldTake) =>
  new Promise((resolve, reject) => {
    amount *= shouldTake ? -1 : 1;
    connection.query('UPDATE accounts SET money = money + ? WHERE id = ?', [amount, id], (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
// const addOrRemove = async (amount, id, shouldTake) => {
//   const doc = await Account.findById(id);
//   shouldTake ? (doc.money -= amount) : (doc.money += amount);
//   return doc.save();
// };

module.exports = {
  findAll,
  addOrRemove,
};
