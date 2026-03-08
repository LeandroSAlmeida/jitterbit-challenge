const Joi = require('joi');
const ValidationException = require('../../../domain/exceptions/ValidationException');

const itemSchema = Joi.object({
  idItem: Joi.string().required(),
  quantidadeItem: Joi.number().integer().min(1).required(),
  valorItem: Joi.number().min(0).required(),
});

const orderSchema = Joi.object({
  numeroPedido: Joi.string().required(),
  valorTotal: Joi.number().min(0).required(),
  dataCriacao: Joi.string().isoDate().required(),
  items: Joi.array().items(itemSchema).min(1).required(),
});

function validateOrder(req, res, next) {
  const { error } = orderSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const message = error.details.map((d) => d.message).join(', ');
    return next(new ValidationException(message));
  }

  next();
}

module.exports = validateOrder;
