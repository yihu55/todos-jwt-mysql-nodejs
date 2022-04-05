const express = require('express');
const registerApi = require('./register');
const loginApi = require('./login');
const meApi = require('./me');
const todoApi = require('./todo');
const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(meApi);
router.use(todoApi);
module.exports = router;
