const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");
const express = require("express");

function testerfun(req, res) {
    console.log(req);
    return res.status(200).send("hello world");
}

const router = express.Router();

// /api/v1/airplanes POST
router.post("/",
    CityMiddlewares.validateCreateRequest,
    CityController.cityControllerPOST
);

module.exports = router;
