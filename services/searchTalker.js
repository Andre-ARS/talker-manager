const { readFile } = require('../helpers');

const searchTalker = async (req, res) => {
  const { q } = req.query;
  const path = './talker.json';
  const talkersList = await readFile(path);
  const searchList = talkersList.filter(({ name }) => name.includes(q));
  res.status(200).json(searchList);
};

module.exports = searchTalker;