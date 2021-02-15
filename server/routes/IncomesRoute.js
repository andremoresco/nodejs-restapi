const express = require('express');
const router = express.Router();
const incomesController  = require('../controllers/IncomesController');
const jsonParser = require('body-parser').json()


router.get('/', incomesController.find);
router.get('/:incomeId', incomesController.findById)
router.post('/', jsonParser, incomesController.create);
router.delete('/:id', incomesController.remove);

module.exports = router;