const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");
const express = require("express");

function testerfun(req, res) {
    console.log(req);
    return res.status(200).send("hello world");
}

const router = express.Router();

// /api/v1/airports POST
router.post("/",
    FlightMiddlewares.validateCreateRequest,
    FlightMiddlewares.validateArrivalDepartureTimes,
    FlightController.flightControllerPOST
);

module.exports = router;
