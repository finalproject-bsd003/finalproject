const express = require('express')
const router = express.Router()
const CartController = require('../controllers/cartController')

router.get('/cart', CartController.readCart)
router.post('/cart/:id', CartController.addCart)
router.delete('/cart/:id', CartController.deleteCart)


module.exports = router