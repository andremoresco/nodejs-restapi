const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Account', AccountSchema);