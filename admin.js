const router = require('express').Router();
const { getAllUsers, getAllTransactions } = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
router.get('/students', auth, admin, getAllUsers);
router.get('/transactions', auth, admin, getAllTransactions);
module.exports = router;
