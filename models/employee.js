"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "name is required" },
          notNull: { args: true, msg: "name is required" },
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "phone_number is required" },
          notNull: { args: true, msg: "phone_number is required" },
        },
      },
      jobtitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "jobtitle is required" },
          notNull: { args: true, msg: "jobtitle is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
