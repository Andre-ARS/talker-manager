const fs = require('fs').promises;

const readFile = async (path) => {
  const talkers = await fs.readFile(path, 'utf8');

  return JSON.parse(talkers);
};

module.exports = readFile;