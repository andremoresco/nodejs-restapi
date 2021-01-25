const earnService = require('../service/EarnService');
const earn = require('../../models/Earn');
const Earn = require('../../models/Earn');

const find = async (req, res) => {
    try {
        const earns = await earnService.find();
        res.json(earns);
    } catch (err) {
        res.status(404).json({message: err});
    }
}

const findById = async (req, res) => {
    try {
        const earn = await earnService.findById(req.params.earnId);
        if (earn == null) {
            res.status(404).end();
        } else {
            res.json(earn);
        }
    } catch (err) {
        res.status(404).json({message: err});
    }
}

const create = async (req, res) => {
    try {
        console.log(req.body);

        const earn = new Earn({
            description: req.body.description,
            value: req.body.value,
            date: req.body.date,
            account: req.body.account
        })

        const createdEarn = await earnService.create(earn);
        res.json(createdEarn);
    } catch(err) {
        console.log(err);
        res.status(500).json({message: err});

    }
}

const remove = async (req, res) => {
    try {
        if (req.params.id == null) {
            res.status(400).json({message: "'Id' cannot be null"})
        }

        const removedEarn = await earnService.remove(req.params.id);

        if (removedEarn.deletedCount > 0) {
            res.status(200).end();
        } else {
            res.status(404).json({message: "Account id " + req.params.id + " not found!"});
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