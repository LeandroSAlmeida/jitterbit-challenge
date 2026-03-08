const jwt = require('jsonwebtoken');
const UnauthorizedException = require('../../../domain/exceptions/UnauthorizedException');

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new UnauthorizedException('Token não fornecido.'));
  }

  const token = authHeader.split(' ')[1];

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    next(new UnauthorizedException('Token inválido ou expirado.'));
  }
}

module.exports = authenticate;
