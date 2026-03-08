const { Router } = require('express');
const controller = require('../controllers/OrderController');
const validateOrder = require('../middlewares/validateOrder');

const router = Router();

router.post('/', validateOrder, controller.create);
router.get('/list', controller.list);
router.get('/:orderId', controller.getById);
router.put('/:orderId', controller.update);
router.delete('/:orderId', controller.delete);

module.exports = router;
