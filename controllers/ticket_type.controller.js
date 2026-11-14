const TicketType = require("../models/ticket_type.model");

const createTicketType = async (req, res) => {
  try {
    const ticketType = await TicketType.create(req.body);
    res.status(201).json(ticketType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTicketTypes = async (req, res) => {
  try {
    const ticketTypes = await TicketType.findAll();
    res.status(200).json(ticketTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTicketTypeById = async (req, res) => {
  try {
    const ticketType = await TicketType.findByPk(req.params.id);

    if (!ticketType) {
      return res.status(404).json({ message: "Ticket type topilmadi" });
    }

    res.status(200).json(ticketType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTicketType = async (req, res) => {
  try {
    const ticketType = await TicketType.findByPk(req.params.id);

    if (!ticketType) {
      return res.status(404).json({ message: "Ticket type topilmadi" });
    }

    await ticketType.update(req.body);
    res.status(200).json(ticketType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTicketType = async (req, res) => {
  try {
    const ticketType = await TicketType.findByPk(req.params.id);

    if (!ticketType) {
      return res.status(404).json({ message: "Ticket type topilmadi" });
    }

    await ticketType.destroy();
    res.status(200).json({ message: "Ticket type o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTicketType,
  getAllTicketTypes,
  getTicketTypeById,
  updateTicketType,
  deleteTicketType,
};