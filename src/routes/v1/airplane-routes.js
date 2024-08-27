const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");
const express = require("express");

const router = express.Router();
router.post(
    "/",
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.airplaneControllerPOST
);

function timepass(req, res) {
    res.send("hello world");
}

router.get("/", timepass);

module.exports = router;
