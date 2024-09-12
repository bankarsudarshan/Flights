const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/*
 * POST: /airports
 * req-body: {modelNumber: 'airbus360', capacity: 200}
 */
async function airportControllerPOST(req, res) {
    try {
        const data = {
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        };

        const airport = await AirportService.insertAirport(data);
        SuccessResponse.message = "Successfully created an airport";
        SuccessResponse.data = airport;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function airportControllerGETAll(req, res) {
    try {
        const aiports = await AirportService.getAirports();
        SuccessResponse.data = aiports;
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

async function airportControllerGET(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
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

async function airportControllerDELETE(req, res) {
    try {
        const response = await AirportService.deleteAirport(req.params.id);
        SuccessResponse.data = response;
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

async function airportControllerUPDATE(req, res) {
    try {
        const data = new Object(req.body);
        const response = await AirportService.updateAirport(req.params.id, data);
        SuccessResponse.data = response;
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
    airportControllerPOST,
    airportControllerGETAll,
    airportControllerGET,
    airportControllerDELETE,
    airportControllerUPDATE,
};
