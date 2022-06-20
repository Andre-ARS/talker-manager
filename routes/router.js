const express = require('express');
const talkersRoute = require('./talkerRoute');

const route = express.Router({ mergeParams: true });

route.use('/talker', talkersRoute);

module.exports = route;