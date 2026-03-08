const Order = require('../../domain/entities/Order');
const OrderAlreadyExistsException = require('../../domain/exceptions/OrderAlreadyExistsException');

class CreateOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(body) {
    const existing = await this.orderRepository.findById(body.numeroPedido);
    if (existing) throw new OrderAlreadyExistsException(body.numeroPedido);

    const order = Order.fromRequest(body);
    return this.orderRepository.create(order);
  }
}

module.exports = CreateOrder;
