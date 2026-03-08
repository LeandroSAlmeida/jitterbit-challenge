const { Router } = require('express');
const controller = require('../controllers/AuthController');

const router = Router();

router.post('/login', controller.login);

module.exports = router;
