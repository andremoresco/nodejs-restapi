const Earn = require('../../models/Earn');
const accountService = require('./AccountsService');
const ValidationError = require('../../errors/ValidationError')

const find = async () => {
    return await Earn.find();
}

const findById = async (id) => {
    return await Earn.findById(id);
}

const create = async (earn) => {
    if (earn.account == null) {
        throw new ValidationError('Account cannot be null!');
    }

    return await earn.save();
}

const remove = async (id) => {
    return await Earn.deleteOne({_id: id});
}

module.exports = {
    find,
    findById,
    create,
    remove
}