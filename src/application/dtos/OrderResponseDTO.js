class OrderResponseDTO {
  static fromEntity(order) {
    return {
      orderId: order.orderId,
      value: order.value,
      creationDate: order.creationDate,
      items: order.items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
    };
  }

  static fromEntityList(orders) {
    return orders.map(OrderResponseDTO.fromEntity);
  }
}

module.exports = OrderResponseDTO;
