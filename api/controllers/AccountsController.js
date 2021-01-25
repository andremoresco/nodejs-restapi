const accountService = require('../service/AccountsService');
const Account = require('../../models/Account');

const find = async (req, res) => {
    try {
        const accounts = await accountService.find();
        res.json(accounts);
    } catch (err) {
        res.status(504).json({message:err});
    }
}

const findById = async (req, res) => {
    try {
        const account = await accountService.findById(req.params.accountId);
        if (account == null) {
            res.status(404).end();
        } else {
            res.json(account);
        }
        
    } catch (err) {
        res.status(500).json({message:err});
    }
}

const create = async (req, res) => {
    console.log(req.body);
    const account = new Account({
        name: req.body.name
    });

    try {
        const savedAccount = await accountService.create(account);
        res.json(savedAccount);
    } catch (err) {
        res.status(500).json({message: err});
    }
}

const remove = async (req, res) => {
    try {
        if (req.params.id == null) {
            res.status(400).json({message: "'Id' cannot be null"})
        }
        const removedAccount = await accountService.remove(req.params.id);
        if (removedAccount.deletedCount > 0) {
            res.status(200).end();
        } else {
            res.status(404).json({message: "Account id " + req.params.id + " not found!"});
        }
    } catch (err) {
        res.status(500).json({message: err});
    }
}

module.exports = {
    find,
    findById,
    create,
    remove
}