const express = require('express');
const loginRoute = require('./loginRoute');
const talkersRoute = require('./talkerRoute');

const route = express.Router({ mergeParams: true });

route.use('/talker', talkersRoute);

route.use('/login', loginRoute);

module.exports = route;