const express = require('express');
const { getTalkers } = require('../middlewares/index.js');

const talkersRoute = express.Router();

talkersRoute.get('/', getTalkers);

module.exports = talkersRoute;
