const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const categoryRouter = require('./categories')
const dressRouter = require('./dress')
// const { authentication } = require('../middlewares/authentication')

router.use(userRouter)
router.use(categoryRouter)
// router.use(authentication)
router.use(dressRouter)
// router.use

module.exports = router