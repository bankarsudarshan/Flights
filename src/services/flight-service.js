const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const flightRepository = new FlightRepository();

async function insertFlight(data) {
    try {
        const flight = await flightRepository.insertTuple(data);
        return flight;
    } catch (error) {
        console.log("got error ", error.name);
        console.log(error);
        if (error.name == "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        // if (error.name == "SequelizeForeignKeyConstraintError") { }
        throw new AppError("Cannot create a flight object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    insertFlight,
};
