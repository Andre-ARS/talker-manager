const express = require('express');
const { tokenValidationMiddleware, validateTalkerMiddleware } = require('../middlewares');
const { getTalkers, getTalkersById, addTalker, updateTalker } = require('../services');

const talkersRoute = express.Router();

talkersRoute.get('/', getTalkers);

talkersRoute.get('/:id', getTalkersById);

talkersRoute.use(tokenValidationMiddleware, validateTalkerMiddleware);

talkersRoute.post('/', addTalker);

talkersRoute.put('/:id', updateTalker);

module.exports = talkersRoute;
