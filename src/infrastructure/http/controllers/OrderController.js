const CreateOrder = require('../../../application/usecases/CreateOrder');
const GetOrder = require('../../../application/usecases/GetOrder');
const ListOrders = require('../../../application/usecases/ListOrders');
const UpdateOrder = require('../../../application/usecases/UpdateOrder');
const DeleteOrder = require('../../../application/usecases/DeleteOrder');
const OrderRepository = require('../../database/OrderRepository');

const repository = new OrderRepository();

class OrderController {
  async create(req, res, next) {
    try {
      const order = await new CreateOrder(repository).execute(req.body);
      return res.status(201).json(order);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const order = await new GetOrder(repository).execute(req.params.orderId);
      return res.status(200).json(order);
    } catch (err) {
      next(err);
    }
  }

  async list(req, res, next) {
    try {
      const orders = await new ListOrders(repository).execute();
      return res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const order = await new UpdateOrder(repository).execute(req.params.orderId, req.body);
      return res.status(200).json(order);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      await new DeleteOrder(repository).execute(req.params.orderId);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new OrderController();
