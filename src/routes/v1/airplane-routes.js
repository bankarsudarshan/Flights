const { AirplaneController } = require('../../controllers');
const express = require('express');
const router = express.Router();
console.log('in airplane routes');
// /api/v1/airplanes POST
router.post('/', AirplaneController.airplaneControllerPOST);

module.exports = router;
