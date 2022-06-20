const express = require('express');
const { login } = require('../services/index');

const loginRoute = express.Router();

loginRoute.post('/', login);

module.exports = loginRoute;