const fs = require('fs').promises;

const writeFile = async (path, text) => {
  const jsonText = JSON.stringify(text);

  const talkers = await fs.writeFile(path, jsonText);
};

module.exports = writeFile;
