const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/*
 * POST: /flights
 * req-body: {modelNumber: 'airbus360', capacity: 200}
 */
async function flightControllerPOST(req, res) {
    try {
        const data = {
            flightId: req.body.flightId,
            airplaneId: req.body.airplaneId,
            departureAirport: req.body.departureAirport,
            arrivalAirport: req.body.arrivalAirport,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
            totalSeats: req.body.totalSeats,
            boardingGate: req.body.boardingGate,
        };

        const flight = await FlightService.insertFlight(data);
        SuccessResponse.message = "Successfully created a flight";
        SuccessResponse.data = flight;

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

async function getAllFlights(req, res) {
    try {
        const response = await FlightService.getAllFlights(req.query);
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
    flightControllerPOST,
    getAllFlights,
};
