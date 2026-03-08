const AppError = require('./AppError');

class OrderNotFoundException extends AppError {
  constructor(orderId) {
    super(`Pedido '${orderId}' não encontrado.`, 404);
  }
}

module.exports = OrderNotFoundException;
