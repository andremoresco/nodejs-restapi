const Account = require('../../models/Account');
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

    if (await containEarns(id)) {
        throw new AccountRemoveForbidden("There is earns in this account.")
    }

    return await Account.deleteOne({_id: id});
}

const isValid = async (accountId) => {
    if (!accountId.match(/^[0-9a-fA-F]{24}$/)) {
        throw new ValidationError("Account ID Invalid!");
    }

    const account = await findById(accountId);

    if (account == null) {
        throw new AccountNotFoundError();
    }
}

const containEarns = async (accountId) => {
    const earnService = require('../service/EarnService');
    const earns = await earnService.findByAccount(accountId);
    return earns && earns.length;
}

module.exports = {
    find,
    findById,
    create,
    remove,
    isValid
}