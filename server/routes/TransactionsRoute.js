const express = require('express');
const router = express.Router();
const transactionsController  = require('../controllers/TransactionsController');
const jsonParser = require('body-parser').json()


router.get('/', transactionsController.find);
router.get('/:id', transactionsController.findById)
router.post('/', jsonParser, transactionsController.save);
router.delete('/:id', transactionsController.remove);
// router.patch('/:id', jsonParser, transactionsController.save);

module.exports = router;