const { validateName, validateAge, validateWhatchedAt, validateRate } = require('../validations');

const newTalkerMiddleware = (req, res, next) => {
  const { name, age, talk } = req.body;
  try {
    validateName(name);
    validateAge(age);
    if (!talk) throw new Error('O campo "talk" é obrigatório');
    validateWhatchedAt(talk);
    validateRate(talk);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = newTalkerMiddleware;