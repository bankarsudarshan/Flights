const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function insertAirplane(data) {
    try {
        console.log("in airplane service:insertAirplane");
        const airplane = await airplaneRepository.insertTuple(data);
        return airplane;
    } catch (error) {
        // console.log(error);
        // console.log("got error ", error.name);
        if (error.name == "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "Cannot ceate an airplane object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    insertAirplane,
};
