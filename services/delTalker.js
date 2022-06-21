const { readFile, writeFile } = require('../helpers');

const delTalker = async (req, res) => {
  const { id } = req.params;
  const path = './talker.json';
  
  const talkersList = await readFile(path);

  const newList = talkersList.filter(({ id: talkerId }) => talkerId !== Number(id));
  await writeFile(path, newList);

  res.status(204).end();
};

module.exports = delTalker;