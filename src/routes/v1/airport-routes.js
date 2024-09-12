const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");
const express = require("express");

function testerfun(req, res) {
    console.log(req);
    return res.status(200).send("hello world");
}

const router = express.Router();

// /api/v1/airports POST
router.post("/",
    AirportMiddlewares.validateCreateRequest,
    AirportController.airportControllerPOST
);

// /api/v1/airports GET
router.get("/",
    AirportController.airportControllerGETAll
);

// /api/v1/airports GET
router.get("/:id",
    AirportController.airportControllerGET
);

// /api/v1/airports DELETE
router.delete("/:id",
    AirportController.airportControllerDELETE
);

router.patch("/:id",
    AirportController.airportControllerUPDATE
)

module.exports = router;
