const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`); // eslint-disable-line
});

module.exports = app;
