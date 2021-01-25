const express = require('express');
const router = express.Router();
const earnController  = require('../api/controllers/EarnController');
const { route } = require('./AccountsRoute');
const jsonParser = require('body-parser').json()


router.get('/', earnController.find);
router.get('/:earnId', earnController.findById)
router.post('/', jsonParser, earnController.create);
router.delete('/:id', earnController.remove);

module.exports = router;