const expensesService = require('./ExpensesService');
const incomesService = require('./IncomesService');

const getBalanceCurrentMonth = async () => {
    console.log("Antes do Promise")

    const expenses = expensesService.find();
    const incomes = incomesService.find();

    return Promise.all([expenses, incomes])
    .then(transactions => {
        console.log(transactions);
        return transactions;
    })
    .catch(err => {
        console.log(err)
        return "ERROR";
    });
}

module.exports = {
    getBalanceCurrentMonth
}