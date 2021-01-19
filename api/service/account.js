const Account = require('../../models/Account');

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
    return await Account.deleteOne({_id: id});
}

module.exports = {
    find,
    findById,
    create,
    remove
}