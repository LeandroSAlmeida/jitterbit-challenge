const OrderNotFoundException = require('../../domain/exceptions/OrderNotFoundException');

class UpdateOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(orderId, body) {
    const existing = await this.orderRepository.findById(orderId);
    if (!existing) throw new OrderNotFoundException(orderId);

    return this.orderRepository.update(orderId, body);
  }
}

module.exports = UpdateOrder;
