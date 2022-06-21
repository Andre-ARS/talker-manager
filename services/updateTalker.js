const { readFile, writeFile } = require('../helpers');

const updateList = (list, updatedTalker, id) => {
  const newList = list.map((talker) => {
    if (talker.id === Number(id)) return updatedTalker;

    return talker;
  });

  return newList;
};

const updateTalker = async (req, res) => {
  const { body: { name, age, talk }, params: { id } } = req;
  const path = './talker.json';
  
  const talkersList = await readFile(path);
  const updatedTalker = {
    name,
    age,
    id: Number(id),
    talk,
  };

  const newList = updateList(talkersList, updatedTalker, id);
  await writeFile(path, newList);

  res.status(200).json(updatedTalker);
};

module.exports = updateTalker;