const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");
const express = require("express");

const router = express.Router();

// /api/v1/airports POST
router.post("/",
    FlightMiddlewares.validateCreateRequest,
    FlightMiddlewares.validateArrivalDepartureTimes,
    FlightController.flightControllerPOST
);

router.get("/",
    FlightController.getAllFlights,
);

module.exports = router;
