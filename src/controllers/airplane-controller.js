const { StatusCodes } = require("http-status-code");

const { AirplaneService } = require("../services");
const { error } = require("winston");

/*
 * POST: /airplanes
 * req-body: {modelNumber: 'airbus360', capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created an airplane",
            // data: res
            error: {},
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: FALSE,
            message: "Something went wrong while creating an airplane",
            // data: res
            error: error,
        });
    }
}

module.exports = {
    createAirplane,
};
