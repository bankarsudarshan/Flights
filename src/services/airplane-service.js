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

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAllTuples();
        return airplanes;
    } catch(error) {
        throw new AppError('Cannot fetch all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.getTuple(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Required airplane not found', error.statusCode);
        }
        throw new AppError('Cannot get the airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirplane(id) {
    try {
        const response = await airplaneRepository.deleteTuple(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Required airplane does not exist to delete', error.statusCode);
        }
        throw new AppError('Cannot delete the airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data) { // this will update the capacity of the airplane
    try {
        const response = await airplaneRepository.updateTuple(id, data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Required airplane does not exist to update', error.statusCode);
        }
        throw new AppError('Cannot update airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    insertAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane,
};
