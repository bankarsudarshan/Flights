const { CityRepository } = require('../repositories');
const { city } = require('../models');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const cityRepository = new CityRepository(city);
async function insertCity(data) {
    try {
        const response = await cityRepository.insertTuple(data);
        return response;
    } catch (error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Could not insert city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    insertCity,
}