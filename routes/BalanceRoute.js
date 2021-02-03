const express = require('express');
const router = express.Router();
const balanceController  = require('../api/controllers/BalanceController');
const jsonParser = require('body-parser').json()

router.get('/', balanceController.getBalanceCurrentMonth);

module.exports = router;