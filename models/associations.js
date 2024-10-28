const Professional = require("./professionals");
const Appointment = require("./appointments");
const Client = require("./clients");

Professional.hasMany(Appointment, {
  foreignKey: "professional_id",
  as: "appointments",
});

Appointment.belongsTo(Professional, {
  foreignKey: "professional_id",
  as: "professional",
});

Appointment.belongsTo(Client, {
  foreignKey: "client_id",
  as: "client",
});
