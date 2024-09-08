const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/*
 * POST: /airplanes
 * req-body: {modelNumber: 'airbus360', capacity: 200}
 */
async function airplaneControllerPOST(req, res) {
    try {
        console.log(req.body);
        const data = {
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        };

        const airplane = await AirplaneService.insertAirplane(data);
        SuccessResponse.message = "Successfully created an airplane";
        SuccessResponse.data = airplane;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function airplaneControllerGETAll(req, res) {
    try {
        const aiplanes = await AirplaneService.getAllAirplanes();
        SuccessResponse.data = aiplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function airplaneControllerGET(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse); 
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    airplaneControllerPOST,
    airplaneControllerGETAll,
    airplaneControllerGET,
};
