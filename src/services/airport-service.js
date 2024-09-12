const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportRepository = new AirportRepository();

async function insertAirport(data) {
    try {
        // console.log('hello');
        const airport = await airportRepository.insertTuple(data);
        return airport;
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
        throw new AppError("Cannot ceate an airport object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {
    try {
        const airports = await airportRepository.getAllTuples();
        return airports;
    } catch(error) {
        throw new AppError('Cannot fetch all airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.getTuple(id);
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Required airport not found', error.statusCode);
        }
        throw new AppError('Cannot get the airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirport(id) {
    try {
        const response = await airportRepository.deleteTuple(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Required airport does not exist to delete', error.statusCode);
        }
        throw new AppError('Cannot delete the airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data) { // this will update the capacity of the airport
    try {
        const response = await airportRepository.updateTuple(id, data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('Required airport does not exist to update', error.statusCode);
        }
        throw new AppError('Cannot update airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    insertAirport,
    getAirports,
    getAirport,
    deleteAirport,
    updateAirport,
};
