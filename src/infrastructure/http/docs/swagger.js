const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Orders API',
      version: '1.0.0',
      description: 'API de gerenciamento de pedidos — Desafio Jitterbit',
    },
    servers: [{ url: 'http://localhost:3000' }],
    components: {
      schemas: {
        Item: {
          type: 'object',
          required: ['idItem', 'quantidadeItem', 'valorItem'],
          properties: {
            idItem: { type: 'string', example: '2434' },
            quantidadeItem: { type: 'integer', example: 1 },
            valorItem: { type: 'number', example: 1000 },
          },
        },
        OrderRequest: {
          type: 'object',
          required: ['numeroPedido', 'valorTotal', 'dataCriacao', 'items'],
          properties: {
            numeroPedido: { type: 'string', example: 'v10089015vdb-01' },
            valorTotal: { type: 'number', example: 10000 },
            dataCriacao: { type: 'string', format: 'date-time', example: '2023-07-19T12:24:11.529Z' },
            items: { type: 'array', items: { $ref: '#/components/schemas/Item' } },
          },
        },
        OrderResponse: {
          type: 'object',
          properties: {
            orderId: { type: 'string', example: 'v10089015vdb-01' },
            value: { type: 'number', example: 10000 },
            creationDate: { type: 'string', format: 'date-time' },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  productId: { type: 'integer', example: 2434 },
                  quantity: { type: 'integer', example: 1 },
                  price: { type: 'number', example: 1000 },
                },
              },
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            error: { type: 'string', example: 'OrderNotFoundException' },
            message: { type: 'string', example: "Pedido 'v10089015vdb-01' não encontrado." },
          },
        },
      },
    },
  },
  apis: ['./src/infrastructure/http/docs/paths/*.js'],
};

module.exports = swaggerJsdoc(options);
