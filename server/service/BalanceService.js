const expensesService = require('./ExpensesService');
const incomesService = require('./IncomesService');

const flatTransactions = (transactions) => {
    return transactions.reduce((flat, toFlatten) => {
        return flat.concat(toFlatten);
    }, [])
}

const sumTransactions = (transactions, filter) => {
    return transactions
    .filter((transaction) => filter ? transaction.type == filter : true)
    .map(expense => expense.value)
    .reduce((sum, transactionValue) => sum + transactionValue, 0);
}

const getBalanceCurrentMonth = async () => {
    const moment = require('moment');
    const startDate = new moment().utc().startOf('month').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    const endDate = new moment().utc().endOf('month').format('YYYY-MM-DDTHH:mm:ss.SSSZ');

    const expenses = expensesService.findBetweenDates(startDate, endDate);
    const incomes = incomesService.findBetweenDates(startDate, endDate);

    return Promise.all([expenses, incomes])
    .then(transactions => {
        const allTransactions = flatTransactions(transactions);

        const expenseValue = sumTransactions(allTransactions, 'expense');
        const incomeValue = sumTransactions(allTransactions, 'income');

        return { incomes: incomeValue, expenses: expenseValue, balance: incomeValue - expenseValue }
    })
    .catch(err => {
        console.log(err)
        return "ERROR";
    });    
}

module.exports = {
    getBalanceCurrentMonth
}