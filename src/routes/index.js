const express = require('express');
const { getTaxByUserId, validateUserId } = require('../controllers/taxController');

const router = express.Router();

router.get('/tax', validateUserId, getTaxByUserId);

module.exports = router;
