
const { where } = require("sequelize");
const Appointment = require("../models/appointments");

module.exports = {
  async createAppointment(req, res) {
    try {
      const { client_id, professional_id, date_time, status } = req.body;
      const appointment = await Appointment.create({
        client_id,
        professional_id,
        date_time,
        status
      });
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json({ error: "Failed to create appointment", details: error.message });
    }
  },

  async getAppointments(req, res) {
    try {
      const appointments = await Appointment.findAll();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve appointments", details: error.message });
    }
  },

  async getAppointmentById(req, res) {
    try {
      const { id } = req.params;
      const appointment = await Appointment.findByPk(id);
      if (appointment) {
        res.status(200).json(appointment);
      } else {
        res.status(404).json({ error: "Appointment not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve appointment", details: error.message });
    }
  },

  async updateAppointment(req, res) {
    try {
      const { id } = req.params;
      const { client_id, professional_id, date_time, status } = req.body;
      const [updateCount] = await Appointment.update(
        { client_id, professional_id, date_time, status },
        { where: { id } }
      );

      if (updateCount > 0) {
        const updatedAppointment = await Appointment.findByPk(id);
        res.status(200).json(updatedAppointment);
      } else {
        res.status(404).json({ error: "Appointment not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Failed to update appointment", details: error.message });
    }
  },

  async deleteAppointment(req, res) {
    try {
      const { id } = req.params;
      const deletedCount = await Appointment.destroy({ where: { id } });

      if (deletedCount > 0) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Appointment not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete appointment", details: error.message });
    }
  }
};
