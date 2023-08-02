const express = require('express')
const router = express.Router()
const PaymentController = require('../controllers/paymentController')

router.post('/payment', PaymentController.makePayment);
router.post('/historyTransaction', PaymentController.historyPayment)

module.exports = router