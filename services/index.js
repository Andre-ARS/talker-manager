const addTalker = require('./addTalker');
const delTalker = require('./delTalker');
const getTalkers = require('./getTalkers');
const getTalkersById = require('./getTalkersById');
const login = require('./login');
const searchTalker = require('./searchTalker');
const updateTalker = require('./updateTalker');

module.exports = {
  getTalkers,
  getTalkersById,
  login,
  addTalker,
  updateTalker,
  delTalker,
  searchTalker,
};
