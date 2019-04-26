const express = require('express');
const { getTaxByUserId } = require('../controllers/taxController');

const router = express.Router();

router.get('/tax', getTaxByUserId);

module.exports = router;
