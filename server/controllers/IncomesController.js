const incomeService = require('../service/IncomesService');

const find = async (req, res) => {
    try {
        const incomes = await incomeService.find();
        res.json(incomes);
    } catch (err) {
        res.status(404).json({message: err});
    }
}

const findById = async (req, res) => {
    try {
        const income = await incomeService.findById(req.params.incomeId);
        if (income == null) {
            res.status(404).end();
        } else {
            res.json(income);
        }
    } catch (err) {
        res.status(404).json({message: err});
    }
}

const create = async (req, res) => {
    try {
        console.log(req.body);
        const createdIncome = await incomeService.create(req.body);
        res.json(createdIncome);
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

        const removedIncome = await incomeService.remove(req.params.id);

        if (removedIncome.deletedCount > 0) {
            res.status(200).end();
        } else {
            res.status(404).json({message: "Income id " + req.params.id + " not found!"});
        }
    } catch(err) {
        res.status(500).json({message: err});
    }
}

module.exports = {
    find,
    findById,
    create,
    remove
}