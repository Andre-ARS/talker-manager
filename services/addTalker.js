const { readFile, writeFile } = require('../helpers');

const addTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const path = './talker.json';
  
  const talkersList = await readFile(path);
  const newTalker = {
    name,
    age,
    id: talkersList.length + 1,
    talk,
  };

  const newList = [...talkersList, newTalker];
  writeFile(path, newList);

  res.status(201).json(newTalker);
};

module.exports = addTalker;