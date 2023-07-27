const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/categoryController')

router.get('/categories', CategoryController.readCategories)
router.post('/categories', CategoryController.createCategories)
router.delete('/categories/:id', CategoryController.deleteCategories)

module.exports = router