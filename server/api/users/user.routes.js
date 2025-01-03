const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.post('/users', controller.createUser);
router.delete('/users/:id', controller.deleteUser);
router.get('/users', controller.getUsers);

module.exports = router;