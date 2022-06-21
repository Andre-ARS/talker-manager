const UIDGenerator = require('uid-generator');

const uidgen = new UIDGenerator(64, UIDGenerator.BASE16);

const login = async (_req, res) => {
  const token = await uidgen.generate();
  res.status(200).json({ token });
};

module.exports = login;
