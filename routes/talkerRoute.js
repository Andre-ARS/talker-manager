const express = require('express');
const {
  validateTokenMiddleware,
  validateTalkerMiddleware,
} = require('../middlewares');
const {
  getTalkers,
  getTalkersById,
  addTalker,
  updateTalker,
  delTalker,
  searchTalker,
} = require('../services');

const talkersRoute = express.Router();

talkersRoute.get('/', getTalkers);

talkersRoute.get('/search', validateTokenMiddleware, searchTalker);

talkersRoute.get('/:id', getTalkersById, getTalkersById);

talkersRoute.delete('/:id', validateTokenMiddleware, delTalker);

talkersRoute.use(validateTokenMiddleware, validateTalkerMiddleware);

talkersRoute.post('/', addTalker);

talkersRoute.put('/:id', updateTalker);

module.exports = talkersRoute;
