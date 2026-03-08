const AppError = require('./AppError');

class UnauthorizedException extends AppError {
  constructor(message = 'Não autorizado.') {
    super(message, 401);
  }
}

module.exports = UnauthorizedException;
