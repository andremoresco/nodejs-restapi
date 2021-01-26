const Account = require('../../models/Account');
const earnService = require('./EarnService');
const AccountNotFoundError = require('../../errors/AccountNotFoundError');
const AccountRemoveForbidden = require('../../errors/AccountRemoveForbidden');

const find = async () => {
    return await Account.find();
}

const findById = async (id) => {
    return await Account.findById(id);
}

const create = async (account) => {
    return await account.save();
}

const remove = async (id) => {

    const account = await findById(id);

    if (!account) {
        throw new AccountNotFoundError();
    }

    const earns = await earnService.findByAccount(id);
    console.log(earns);

    if (earns && earns.length) {
        throw new AccountRemoveForbidden("There is earns in this account.")
    }

    return await Account.deleteOne({_id: id});
}

const isValid = async (accountId) => {
    console.log("done")
    if (!accountId.match(/^[0-9a-fA-F]{24}$/)) {
        throw new ValidationError("Account ID Invalid!");
    }

    const account = await findById(accountId);

    if (account == null) {
        throw new AccountNotFoundError();
    }
}

module.exports = {
    find,
    findById,
    create,
    remove,
    isValid
}