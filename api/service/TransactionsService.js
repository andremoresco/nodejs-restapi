const Transaction = require('../../models/Transaction');

const find = async (filter) => {
    return await Transaction.find(filter);
}

const findById = async (id) => {
    return await Transaction.findById(id);
}

const save = async (doc) => {
    const transaction = new Transaction(doc);
    return await transaction.save();
}

const remove = async (id) => {
    return await Transaction.deleteOne({_id: id});
}

module.exports = {
    find,
    findById,
    save,
    remove
}