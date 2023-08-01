const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const categoryRouter = require('./categories')
const dressRouter = require('./dress')
const favoriteRouter = require('./favorite')
const storeRouter = require('./store')
const googleMapsRouter = require('./googleMaps')
const paymentRouter = require('./payment')
const { authentication } = require('../middlewares/authentication')
const paymentRouter = require('./payment')
router.use(userRouter)
router.use(categoryRouter)
router.use(storeRouter)
router.use(dressRouter)
router.use(googleMapsRouter)
router.use(authentication)
router.use(favoriteRouter)
router.use(paymentRouter)
<<<<<<< HEAD
=======

>>>>>>> ab84637fa2a207d2c3b815a452b91d2947a5dff2
module.exports = router