const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

const validateWhatchedAt = ({ watchedAt }) => {
  const dateIsValid = dateRegex.test(watchedAt);

  if (!watchedAt) throw new Error('O campo "watchedAt" é obrigatório');

  if (!dateIsValid) throw new Error('O campo "watchedAt" deve ter o formato "dd/mm/aaaa"');
};

module.exports = validateWhatchedAt;