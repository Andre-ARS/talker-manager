const express = require('express');
const { tokenValidationMiddleware } = require('../middlewares');
const newTalkerMiddleware = require('../middlewares/newTalkerMiddleware');
const { getTalkers, getTalkersById, addTalker } = require('../services');

const talkersRoute = express.Router();

talkersRoute.get('/', getTalkers);

talkersRoute.get('/:id', getTalkersById);

talkersRoute.post('/', tokenValidationMiddleware, newTalkerMiddleware, addTalker);

module.exports = talkersRoute;
