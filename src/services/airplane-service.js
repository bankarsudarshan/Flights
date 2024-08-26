const { AirplaneRepository } = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function insertAirplane(data) {
  try {
    console.log('in airplane service:insertAirplane');
    const airplane = await airplaneRepository.insertTuple(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  insertAirplane,
};
