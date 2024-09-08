const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function insertAirplane(data) {
    try {
        // console.log('hello');
        const airplane = await airplaneRepository.insertTuple(data);
        return airplane;
    } catch (error) {
        // console.log("got error ", error.name);
        // console.log(error);
        if (error.name == "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot ceate an airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAllTuples();
        return airplanes;
    } catch(error) {
        return new AppError('Cannot fetch all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    insertAirplane,
    getAllAirplanes,
};
