// const mongoose = require('mongoose');
const mysql = require('mysql');

// mongoose.connect(process.env.CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   dbName: 'TodoApp',
// });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'Bank',
});

connection.connect();

module.exports = {
  connection,
};
