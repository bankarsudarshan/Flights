const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
    if(req.body.name && req.body.cityId && req.body.code) {
        next();
    }
    else{
        ErrorResponse.message = "Something went wrong while creating a airport";

        const explanations = [];
        if (!req.body.name) {
            explanations.push("Airport name not found in the incoming request body");
        }
        if (!req.body.cityId) {
            explanations.push("City id of airport not found in the incoming request body");
        }
        if (!req.body.code) {
            explanations.push("Airport code not found in the incoming request body")
        }
        ErrorResponse.error = new AppError( explanations, StatusCodes.BAD_REQUEST );
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
}

module.exports = { validateCreateRequest };
