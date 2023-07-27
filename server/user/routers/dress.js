const express = require('express')
const router = express.Router()
const DressController = require('../controllers/dressController')

router.get('/dress', DressController.readDress)
router.get('/dress/:id', DressController.readDressDetail)
router.post('/dress', DressController.createDress)
router.put('/dress/:id', DressController.updateDress)
router.delete('dress/:id', DressController.deleteDress)

module.exports = router