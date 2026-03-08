const OrderResponseDTO = require('../dtos/OrderResponseDTO');
const OrderNotFoundException = require('../../domain/exceptions/OrderNotFoundException');

class UpdateOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(orderId, body) {
    const existing = await this.orderRepository.findById(orderId);
    if (!existing) throw new OrderNotFoundException(orderId);

    const updated = await this.orderRepository.update(orderId, body);
    return OrderResponseDTO.fromEntity(updated);
  }
}

module.exports = UpdateOrder;
