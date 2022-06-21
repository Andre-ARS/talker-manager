const loginValidation = require('./loginValidationMiddleware');
const tokenValidationMiddleware = require('./tokenValidationMiddleware');

module.exports = { loginValidation, tokenValidationMiddleware };