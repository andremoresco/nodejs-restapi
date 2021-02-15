const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    account: {
        type: String
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema);