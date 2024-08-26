const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');

/*
 * POST: /airplanes
 * req-body: {modelNumber: 'airbus360', capacity: 200}
 */
async function airplaneControllerPOST(req, res) {
  try {
    console.log('in airplane controller:try');
    const data = {
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    };
    const airplane = await AirplaneService.insertAirplane(data);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully created an airplane',
      data: airplane,
      error: {},
    });
  } catch (err) {
    console.log('in airplane controller:catch');
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Something went wrong while creating an airplane',
      data: {},
      error: err,
    });
  }
}

module.exports = {
  airplaneControllerPOST,
};
