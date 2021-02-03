const express = require('express');
const router = express.Router();
const expensesController  = require('../api/controllers/ExpensesController');
const jsonParser = require('body-parser').json()

router.get('/', expensesController.find);
router.get('/:id', expensesController.findById)
router.post('/', jsonParser, expensesController.create);
router.delete('/:id', expensesController.remove);

module.exports = router;