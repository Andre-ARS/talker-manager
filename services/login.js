const UIDGenerator = require('uid-generator');

const uidgen = new UIDGenerator(64, UIDGenerator.BASE16);

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({ message: 'email or password can\'t be blank' });
  }
  const token = await uidgen.generate();
  res.status(200).json({ token });
};

module.exports = login;