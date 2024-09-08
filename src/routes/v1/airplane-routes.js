const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");
const express = require("express");

const router = express.Router();
router.post(
    "/",
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.airplaneControllerPOST
);

router.get(
    "/",
    AirplaneController.airplaneControllerGETAll
);

module.exports = router;
