class ListOrders {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute() {
    return this.orderRepository.findAll();
  }
}

module.exports = ListOrders;
