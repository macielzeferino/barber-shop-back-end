const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Appointment = require("./appointments");

const Client = sequelize.define(
  "Client",
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "clients",
    timestamps: true,
  }
);

Client.hasMany(Appointment, {
  foreignKey: "client_id",
  as: "appointments",
})

module.exports = Client;
