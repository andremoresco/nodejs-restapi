const express = require('express');
const router = express.Router();
const balanceService = require('../service/BalanceService');
const jsonParser = require('body-parser').json()


router.get('/', async (req, res) => {
    try {
        const balance = await balanceService.getBalanceCurrentMonth();
        res.json(balance);
    } catch (err) {
        res.status(404).json({message: err});
    }
});


module.exports = router;