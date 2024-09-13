const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para realizar compra
router.post('/purchase', authMiddleware, orderController.purchase);

module.exports = router;
