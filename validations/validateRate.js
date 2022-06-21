const validateRate = ({ rate }) => {
  if (rate <= 1 || rate > 5) throw new Error('O campo "rate" deve ser um inteiro de 1 à 5');
  if (!rate) throw new Error('O campo "rate" é obrigatório');
};

module.exports = validateRate;