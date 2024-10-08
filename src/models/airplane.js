'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.flight, {
        foreignKey: 'airplaneId',
        onDelete: 'cascade',
      })
      this.hasMany(models.seat, {
        foreignKey: 'airplaneId',
        onDelete: 'cascade',
      })
    }
  }
  airplane.init({
    modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: false,
        },
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            max: 1200,
        }
    }
  }, {
    sequelize,
    modelName: 'airplane',
  });
  return airplane;
};