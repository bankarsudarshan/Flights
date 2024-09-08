const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");
const express = require("express");

// function timepass(req, res) {
//     console.log(req);
//     return res.status(200).send("hello world");
// }

const router = express.Router();

// /api/v1/airplanes POST
router.post(
    "/",
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.airplaneControllerPOST
);

// /api/v1/airplanes GET
router.get(
    "/",
    AirplaneController.airplaneControllerGETAll
);

// /api/v1/airplanes GET
router.get(
    "/:id",
    AirplaneController.airplaneControllerGET
);

module.exports = router;
