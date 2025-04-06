const router = require('express').Router();
const { payFees, getFeeHistory } = require('../controllers/feesController');
const auth = require('../middleware/authMiddleware');
router.post('/pay', auth, payFees);
router.get('/history', auth, getFeeHistory);
module.exports = router;
