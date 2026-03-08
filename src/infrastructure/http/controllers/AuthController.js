const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UnauthorizedException = require('../../../domain/exceptions/UnauthorizedException');

class AuthController {
  async login(req, res, next) {
    try {
      const { username, password } = req.body;

      const validUsername = username === process.env.AUTH_USERNAME;
      const validPassword = await bcrypt.compare(password, await bcrypt.hash(process.env.AUTH_PASSWORD, 10));

      if (!validUsername || !validPassword) {
        throw new UnauthorizedException('Credenciais inválidas.');
      }

      const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      return res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
