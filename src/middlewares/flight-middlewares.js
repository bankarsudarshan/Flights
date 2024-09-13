const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
    if(req.body.name && req.body.cityId && req.body.code) {
        next();
    }
    else{
        ErrorResponse.message = "Something went wrong while creating a airport";

        const explanations = [];
        if (!req.body.flightId) {
            explanations.push("flightId not found in the incoming request body");
        }
        if (!req.body.airplaneId) {
            explanations.push("airplaneId of airport not found in the incoming request body");
        }
        if (!req.body.departureAirport) {
            explanations.push("departureAirport not found in the incoming request body")
        }
        if (!req.body.arrivalAirport) {
            explanations.push("arrivalAirport not found in the incoming request body")
        }
        if (!req.body.departureTime) {
            explanations.push("departureTime not found in the incoming request body")
        }
        if (!req.body.arrivalTime) {
            explanations.push("arrivalTime not found in the incoming request body")
        }
        if (!req.body.price) {
            explanations.push("Price not found in the incoming request body")
        }
        if (!req.body.totalSeats) {
            explanations.push("totalSeats not found in the incoming request body")
        }
        ErrorResponse.error = new AppError( explanations, StatusCodes.BAD_REQUEST );
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
}

module.exports = { validateCreateRequest };
