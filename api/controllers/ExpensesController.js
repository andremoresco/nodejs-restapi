const expensesService = require('../service/ExpensesService');


const find = async (req, res) => {
    try {
        const expenses = await expensesService.find();
        res.json(expenses);
    } catch (err) {
        res.status(404).json({message: err});
    }
}

const findById = async (req, res) => {
    try {
        const expense = await expensesService.findById(req.params.id);
        if (expense == null) {
            res.status(404).end();
        } else {
            res.json(expense);
        }
    } catch (err) {
        res.status(404).json({message: err});
    }
}

const create = async (req, res) => {
    try {
        console.log(req.body);
        const createdExpense = await expensesService.create(req.body);
        res.json(createdExpense);
    } catch(err) {
        console.log(err);
        if (err.code == "VALIDATION_ERROR") {
            res.status(400).json(err);

        } else if (err.code == "EXPENSE_NOT_FOUND_ERROR") {
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

        const removedExpense = await expensesService.remove(req.params.id);

        if (removedExpense.deletedCount > 0) {
            res.status(200).end();
        } else {
            res.status(404).json({message: "Expense id " + req.params.id + " not found!"});
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