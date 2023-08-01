const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const paymentController = require('../controllers/paymentController')

router.post('/payment', paymentController.makePayment);
=======
const PaymentController = require('../controllers/paymentController')

router.post('/payment', PaymentController.makePayment);
>>>>>>> ab84637fa2a207d2c3b815a452b91d2947a5dff2

module.exports = router