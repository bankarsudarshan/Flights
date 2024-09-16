const CrudRepository = require('./crud-repository');
const { flight, airport } = require('../models');

class FlightRepository extends CrudRepository {
    constructor() {
        super(flight);
    }

    async getAllFlights(customFilter, sortArr) {
        const flights = await flight.findAll({
            include: [
                {
                    model: airport,
                    as: 'DepartureAirport',
                    attributes: ['name', 'code'],
                },
                {
                    model: airport,
                    as: 'ArrivalAirport',
                    attributes: ['name', 'code'],
                }
            ],
            where: customFilter,
            order: sortArr,
        })
        return flights;
    }
}

module.exports = FlightRepository;
