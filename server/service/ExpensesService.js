const transactionsService = require('./TransactionsService');

const find = async () => {
    return await transactionsService.find({type: 'expense'});
}

const findById = async (id) => {
    return await transactionsService.findById(id);
}

const findByAccount = async (accountId) => {
    return await transactionsService.find({account: accountId});
}

const findBetweenDates = async (startDate, endDate) => {
    return await transactionsService.find({type: 'expense', date: {$gte: startDate, $lte: endDate}});
}

const create = async (expense) => {
    expense.type = 'expense';
    return await transactionsService.save(expense);
}

const remove = async (id) => {
    return await transactionsService.remove(id);
}

module.exports = {
    find,
    findById,
    findByAccount,
    create,
    remove,
    findBetweenDates
}