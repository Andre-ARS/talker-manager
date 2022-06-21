const loginValidation = require('./loginValidationMiddleware');
const tokenValidationMiddleware = require('./tokenValidationMiddleware');
const validateTalkerMiddleware = require('./validateTalkerMiddleware');

module.exports = { loginValidation, tokenValidationMiddleware, validateTalkerMiddleware };
