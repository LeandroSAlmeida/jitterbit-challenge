const CreateOrderDTO = require('../dtos/CreateOrderDTO');
const OrderResponseDTO = require('../dtos/OrderResponseDTO');
const OrderAlreadyExistsException = require('../../domain/exceptions/OrderAlreadyExistsException');

class CreateOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(body) {
    const existing = await this.orderRepository.findById(body.numeroPedido);
    if (existing) throw new OrderAlreadyExistsException(body.numeroPedido);

    const order = CreateOrderDTO.toEntity(body);
    const created = await this.orderRepository.create(order);
    return OrderResponseDTO.fromEntity(created);
  }
}

module.exports = CreateOrder;
