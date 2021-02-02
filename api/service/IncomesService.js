const ValidationError = require('../../errors/ValidationError');
const transactionsService = require('./TransactionsService');

const find = async () => {
    return await transactionsService.find({type: 'income'});
}

const findById = async (id) => {
    return await transactionsService.findById(id);
}

const findByAccount = async (accountId) => {
    return await transactionsService.find({account: accountId});
}

const create = async (income) => {
    income.type = 'income';
    return await transactionsService.save(income);
}

const remove = async (id) => {
    return await transactionsService.remove(id);
}

module.exports = {
    find,
    findById,
    findByAccount,
    create,
    remove
}