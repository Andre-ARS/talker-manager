const { readFile } = require('../helpers');

const getTalkers = async (_req, res) => {
  const path = './talker.json';

  const result = await readFile(path);
  return res.status(200).json(result);
};

module.exports = getTalkers;
