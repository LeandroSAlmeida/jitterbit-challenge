const OrderNotFoundException = require('../../domain/exceptions/OrderNotFoundException');

class DeleteOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(orderId) {
    const existing = await this.orderRepository.findById(orderId);
    if (!existing) throw new OrderNotFoundException(orderId);

    await this.orderRepository.delete(orderId);
  }
}

module.exports = DeleteOrder;
