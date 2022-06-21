const express = require('express');
const { tokenValidationMiddleware, validateTalkerMiddleware } = require('../middlewares');
const { getTalkers, getTalkersById, addTalker, updateTalker, delTalker } = require('../services');

const talkersRoute = express.Router();

talkersRoute.get('/', getTalkers);

talkersRoute.get('/:id', getTalkersById);

talkersRoute.delete('/:id', tokenValidationMiddleware, delTalker);

talkersRoute.use(tokenValidationMiddleware, validateTalkerMiddleware);

talkersRoute.post('/', addTalker);

talkersRoute.put('/:id', updateTalker);

module.exports = talkersRoute;
