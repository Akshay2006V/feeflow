const router = require('express').Router();
const { createOrder } = require('../controllers/paymentController');
const auth = require('../middleware/authMiddleware');
router.post('/create-order', auth, createOrder);
module.exports = router;
