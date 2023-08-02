const express = require('express')
const router = express.Router()
const GoogleMapsController = require('../controllers/googleMapsController')

router.post('/nearestShop', GoogleMapsController.readShop)
<<<<<<< HEAD
router.post('/getDirections', GoogleMapsController.readDirection)
router.get('/placePhoto/:photo_reference', GoogleMapsController.readPlacePhoto)
router.get('/place-details/:placeId', GoogleMapsController.readPlaceDetail)
=======
// router.post('/getDirections', GoogleMapsController.readDirection)
// router.get('/placePhoto/:photo_reference', GoogleMapsController.readPlacePhoto)
// router.get('/place-details/:placeId', GoogleMapsController.readPlaceDetail)
>>>>>>> origin


module.exports = router