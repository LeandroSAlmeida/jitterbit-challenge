const OrderResponseDTO = require('../dtos/OrderResponseDTO');

class ListOrders {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute() {
    const orders = await this.orderRepository.findAll();
    return OrderResponseDTO.fromEntityList(orders);
  }
}

module.exports = ListOrders;
