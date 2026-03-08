class IOrderRepository {
  async create(order) { throw new Error('Not implemented'); }
  async findById(orderId) { throw new Error('Not implemented'); }
  async findAll() { throw new Error('Not implemented'); }
  async update(orderId, data) { throw new Error('Not implemented'); }
  async delete(orderId) { throw new Error('Not implemented'); }
}

module.exports = IOrderRepository;
