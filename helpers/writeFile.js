const fs = require('fs').promises;

const writeFile = async (path, text) => {
  const jsonText = JSON.stringify(text);

  await fs.writeFile(path, jsonText);
};

module.exports = writeFile;
