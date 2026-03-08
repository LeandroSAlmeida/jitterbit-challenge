const AppError = require('./AppError');

class OrderAlreadyExistsException extends AppError {
  constructor(orderId) {
    super(`Pedido '${orderId}' já existe.`, 409);
  }
}

module.exports = OrderAlreadyExistsException;
