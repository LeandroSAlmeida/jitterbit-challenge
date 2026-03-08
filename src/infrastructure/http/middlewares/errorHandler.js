const AppError = require('../../../domain/exceptions/AppError');

function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.name,
      message: err.message,
    });
  }

  console.error(err);
  return res.status(500).json({
    error: 'InternalServerError',
    message: 'Erro interno no servidor.',
  });
}

module.exports = errorHandler;
