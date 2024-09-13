const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common')

async function cityControllerPOST(req, res) {
    try {
        const city = await CityService.insertCity({name: req.body.name});
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function cityControllerDELETE(req, res) {
    try {
        const response = await CityService.deleteCity(req.params.id);
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
    cityControllerPOST,
    cityControllerDELETE,
}