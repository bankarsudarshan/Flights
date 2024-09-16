'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.airplane, {
        foreignKey: 'airplaneId',
      })
      this.belongsTo(models.airport, {
        foreignKey: 'departureAirport',
        targetKey: 'code',
        as: 'DepartureAirport',
      })
      this.belongsTo(models.airport, {
        foreignKey: 'arrivalAirport',
        targetKey: 'code',
        as: 'ArrivalAirport',
      })
    }
  }
  flight.init({
    flightId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    departureAirport: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    arrivalAirport: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalSeats: { // remaining seats from the total
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    boardingGate: {
        type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};