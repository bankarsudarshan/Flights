const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { Op } = require("sequelize");

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
        throw new AppError("Cannot create a flight object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query) {
    const customFilter = {};
    let sortArr = [];
    if(query.trip) {
        const [departureAirport, arrivalAirport] = query.trip.split("-");
        customFilter.departureAirport = departureAirport;
        customFilter.arrivalAirport = arrivalAirport;
    }
    if(query.prices) {
        const [minPrice, maxPrice] = query.prices.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice===undefined)?20000:maxPrice)]
        }
    }
    if(query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers,
        }
    }
    if(query.sort) {
        const arr = query.sort.split(",");
        sortArr = arr.map((str) => {
            return str.split("_");
        })
    }
    console.log(sortArr);
    try {
        const flights = await flightRepository.getAllFlights(customFilter, sortArr);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppError("Cannot fetch the flights", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    insertFlight,
    getAllFlights,
};
