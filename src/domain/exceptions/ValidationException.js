const AppError = require('./AppError');

class ValidationException extends AppError {
  constructor(message) {
    super(message, 400);
  }
}

module.exports = ValidationException;
