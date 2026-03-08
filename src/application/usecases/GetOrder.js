const OrderNotFoundException = require('../../domain/exceptions/OrderNotFoundException');

class GetOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(orderId) {
    const order = await this.orderRepository.findById(orderId);
    if (!order) throw new OrderNotFoundException(orderId);
    return order;
  }
}

module.exports = GetOrder;
