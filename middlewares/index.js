const loginValidation = require('./loginValidationMiddleware');
const validateTokenMiddleware = require('./validateTokenMiddleware');
const validateTalkerMiddleware = require('./validateTalkerMiddleware');

module.exports = { loginValidation, validateTokenMiddleware, validateTalkerMiddleware };
