const express = require('express');
const { getTalkers, getTalkersById } = require('../services/index.js');

const talkersRoute = express.Router();

talkersRoute.get('/', getTalkers);

talkersRoute.get('/:id', getTalkersById);

module.exports = talkersRoute;
