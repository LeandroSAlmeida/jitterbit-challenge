const Order = require('../../domain/entities/Order');

class CreateOrderDTO {
  static toEntity(body) {
    return new Order({
      orderId: body.numeroPedido,
      value: body.valorTotal,
      creationDate: new Date(body.dataCriacao),
      items: body.items.map((item) => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem,
      })),
    });
  }
}

module.exports = CreateOrderDTO;
