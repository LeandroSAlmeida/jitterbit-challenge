const IOrderRepository = require('../../domain/repositories/IOrderRepository');
const OrderSchema = require('./OrderSchema');

class OrderRepository extends IOrderRepository {
  async create(order) {
    const doc = await OrderSchema.create(order);
    return doc.toObject();
  }

  async findById(orderId) {
    const doc = await OrderSchema.findOne({ orderId }).lean();
    return doc || null;
  }

  async findAll() {
    return OrderSchema.find().lean();
  }

  async update(orderId, data) {
    const doc = await OrderSchema.findOneAndUpdate(
      { orderId },
      { $set: data },
      { new: true, runValidators: true }
    ).lean();
    return doc;
  }

  async delete(orderId) {
    await OrderSchema.deleteOne({ orderId });
  }
}

module.exports = OrderRepository;
