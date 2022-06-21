const express = require('express');
const { loginValidation } = require('../middlewares');
const { login } = require('../services/index');

const loginRoute = express.Router();

loginRoute.post('/', loginValidation, login);

module.exports = loginRoute;
