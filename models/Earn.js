const mongoose = require('mongoose');

const EarnSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    account: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Earn', EarnSchema);