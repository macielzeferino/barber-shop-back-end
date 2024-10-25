const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Client = require("./clients");
const Professional = require("./professionals");

const Appointment = sequelize.define(
  "Appointment",
  {
    name: {
      id: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "clients",
        key: "id",
      },
      allowNull: false,
    },
    professional_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "professionals",
        key: "id",
      },
      allowNull: false,
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("confirmed", "canceled", "pending"),
      allowNull: false,
    },
  },
  {
    tableName: "appointments",
    timestamps: true,
  }
);

Appointment.belongsTo(Client,{
  foreignKey:"client_id",
  as:"client",
});

Appointment.belongsTo(Professional,{
  foreignKey:"professional_id",
  as:"professional",
});

module.exports = Appointment;
