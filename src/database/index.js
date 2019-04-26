// const mongoose = require('mongoose');

// mongoose.connect(process.env.CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   dbName: 'Tax',
// });

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'Tax',
});

connection.connect();

module.exports = {
  connection,
};
