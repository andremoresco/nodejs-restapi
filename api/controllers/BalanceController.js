const balanceService = require('../service/BalanceService');

const getBalanceCurrentMonth = async (req, res) => {
    try {
        const balance = await balanceService.getBalanceCurrentMonth();
        console.log(balance)
        res.json(balance);
    } catch (err) {
        res.status(404).json({message: err});
    }
}

module.exports = {
    getBalanceCurrentMonth
}