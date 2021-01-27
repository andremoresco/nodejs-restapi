const Earn = require('../../models/Earn');
const ValidationError = require('../../errors/ValidationError');

const find = async () => {
    return await Earn.find();
}

const findById = async (id) => {
    return await Earn.findById(id);
}

const findByAccount = async (accountId) => {
    return await Earn.find({account: accountId});
}

const create = async (earn) => {
    if (earn.account == null) {
        throw new ValidationError("Account cannot be null!");
    }

    const AccountsService = require('../service/AccountsService');
    await AccountsService.isValid(earn.account);

    return await earn.save();
}

const remove = async (id) => {
    return await Earn.deleteOne({_id: id});
}

module.exports = {
    find,
    findById,
    findByAccount,
    create,
    remove
}