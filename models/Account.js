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

AccountSchema.post('find', (err, doc, next) => {
    console.log("schema error")
})

module.exports = mongoose.model('Account', AccountSchema);