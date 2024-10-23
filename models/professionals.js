const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Professional = sequelize.define(
  "Professional",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available_schedules: {
      type: DataTypes.JSON,
    },
  },
  {
    tableName: "professionals",
    timestamps: true,
  }
);

module.exports = Professional;
