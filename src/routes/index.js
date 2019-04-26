const express = require('express');
const accountController = require('../controllers/accountController');

const router = express.Router();

router.get('/accounts', accountController.findAll);
router.post('/accounts', accountController.transfer);

module.exports = router;
