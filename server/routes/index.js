const express = require('express');
const registerApi = require('./register');
const loginApi = require('./login');
const todoApi = require('./todo');
const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(todoApi);
module.exports = router;
