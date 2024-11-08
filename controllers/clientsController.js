const { where } = require("sequelize");
const Client = require("../models/clients");

module.exports = {
  async createClient(req, res) {
    try {
      const client = await Client.create(req.body);
      res.status(201).json(client);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async getClients(req, res) {
    const clients = await Client.findAll();
    res.json(clients);
  },
  async getClientById(req, res) {
    const client = await Client.findByPk(req.params.id);
    client
      ? res.json(client)
      : res.status(404).json({ error: "Client not found" });
  },
  async updateClient(req, res) {
    try {
      const id = req.params.id;
      const [updated] = await Client.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedClient = await Client.findByPk(id);
        return res.status(200).json(updatedClient);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async deleteClient(req, res) {
    const deleted = await Client.destroy({ where: { id: req.params.id } });
    deleted
      ? res.sendStatus(204)
      : res.status(404).json({ error: "Client not found" });
  },
};
