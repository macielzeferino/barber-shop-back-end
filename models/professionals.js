const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Appointment = require("./appointments");

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

Professional.hasMany(Appointment,{
  foreignKey:"professional_id",
  as:"appointments",
})

module.exports = Professional;
