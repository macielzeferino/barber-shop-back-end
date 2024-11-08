const { where } = require("sequelize");
const Professional = require("../models/professionals");

module.exports = {
  async createProfessional(req, res) {
    try {
      const { name, email, password, available_schedules } = req.body;
      const professional = await Professional.create({
        name,
        email,
        password,
        available_schedules: available_schedules || [],
      });

      res.status(201).json(professional);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

 
  async getProfessionals(req, res) {
    try {
      const professionals = await Professional.findAll();
      res.json(professionals);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar profissionais" });
    }
  },

  async getProfessionalById(req, res) {
    try {
      const professional = await Professional.findByPk(req.params.id);
      professional
        ? res.json(professional)
        : res.status(404).json({ error: "Professional not found" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar profissional" });
    }
  },

  async updateProfessional(req, res) {
    try {
      const id = req.params.id;
      const [update] = await Professional.update(req.body, {
        where: { id },
      });

      if (update) {
        const updatedProfessional = await Professional.findByPk(id);
        return res.status(200).json(updatedProfessional);
      } else {
        return res.status(404).json({ error: "Professional not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteProfessional(req, res) {
    try {
      const deleted = await Professional.destroy({ where: { id: req.params.id } });
      deleted
        ? res.sendStatus(204)
        : res.status(404).json({ error: "Professional not found" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar profissional" });
    }
  },
};
