const transactionsService = require('../service/TransactionsService');

const find = async (req, res) => {
    try {
        const transactions = await transactionsService.find();
        res.json(transactions);
    } catch (err) {
        res.status(404).json({message: err});
    }
}

const findById = async (req, res) => {
    try {
        const transaction = await transactionsService.findById(req.params.id);
        if (transaction == null) {
            res.status(404).end();
        } else {
            res.json(transaction);
        }
    } catch (err) {
        res.status(404).json({message: err});
    }
}

const save = async (req, res) => {
    try {
        console.log(req.params)
        console.log(req.body);
        const createdTransaction = await transactionsService.save(req.body);
        res.json(createdTransaction);
    } catch(err) {
        console.log(err);
        if (err.code == "VALIDATION_ERROR") {
            res.status(400).json(err);

        } else if (err.code == "ACCOUNT_NOT_FOUND_ERROR") {
            res.status(400).json(err);
    
        } else {
            res.status(500).json({message: err});
        }
    }
}

const remove = async (req, res) => {
    try {
        if (req.params.id == null) {
            res.status(400).json({message: "'Id' cannot be null"})
        }

        const removedTransaction = await transactionsService.remove(req.params.id);

        if (removedTransaction.deletedCount > 0) {
            res.status(200).end();
        } else {
            res.status(404).json({message: "Transaction id " + req.params.id + " not found!"});
        }
    } catch(err) {
        res.status(500).json({message: err});
    }
}

module.exports = {
    find,
    findById,
    save,
    remove,
}