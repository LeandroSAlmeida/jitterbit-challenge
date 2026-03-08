class Order {
  constructor({ orderId, value, creationDate, items }) {
    this.orderId = orderId;
    this.value = value;
    this.creationDate = creationDate;
    this.items = items;
  }

  static fromRequest(body) {
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

module.exports = Order;
