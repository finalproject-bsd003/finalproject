const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const categoryRouter = require('./categories')
const dressRouter = require('./dress')
const cartRouter = require('./cart')
const favoriteRouter = require('./favorite')
const { authentication } = require('../middlewares/authentication')

router.use(userRouter)
router.use(categoryRouter)
router.use(dressRouter)
router.use(authentication)
router.use(cartRouter)
router.use(favoriteRouter)

module.exports = router