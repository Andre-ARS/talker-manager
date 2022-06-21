const validateAge = (age) => {
  if (!age) throw new Error('O campo "age" é obrigatório');

  if (age < 18) throw new Error('A pessoa palestrante deve ser maior de idade');
};

module.exports = validateAge;