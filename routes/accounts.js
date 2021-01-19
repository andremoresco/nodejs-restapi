const express = require('express');
const router = express.Router();
const AccountController  = require('../api/controllers/accounts')
const jsonParser = require('body-parser').json()

router.get('/', AccountController.find)
router.get('/:accountId', AccountController.findById)
router.post('/', jsonParser, AccountController.create);
// router.delete('/:id', AccountController.remove);

module.exports = router;