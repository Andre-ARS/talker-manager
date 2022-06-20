const readFile = require('../helpers/readFile');

const getTalkersById = async (req, res) => {
  const path = './talker.json';
  const { id } = req.params;
  const talkers = await readFile(path);

  const foundTalker = talkers.find((talker) => talker.id === Number(id));

  if (!foundTalker) {
    return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(foundTalker);
};

module.exports = getTalkersById;
