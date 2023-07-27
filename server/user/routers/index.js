const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const categoryRouter = require('./categories')
// const companyRouter = require('./companies')
// const { authentication } = require('../middlewares/authentication')

router.use(userRouter)
router.use(categoryRouter)
// router.use(authentication)
// router.use(companyRouter)

module.exports = router