const TicketStatus = require("../models/ticket_status.model");

const createTicketStatus = async (req, res) => {
  try {
    const ticketStatus = await TicketStatus.create(req.body);
    res.status(201).json(ticketStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTicketStatuses = async (req, res) => {
  try {
    const ticketStatuses = await TicketStatus.findAll();
    res.status(200).json(ticketStatuses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTicketStatusById = async (req, res) => {
  try {
    const ticketStatus = await TicketStatus.findByPk(req.params.id);

    if (!ticketStatus) {
      return res.status(404).json({ message: "Ticket status topilmadi" });
    }

    res.status(200).json(ticketStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTicketStatus = async (req, res) => {
  try {
    const ticketStatus = await TicketStatus.findByPk(req.params.id);

    if (!ticketStatus) {
      return res.status(404).json({ message: "Ticket status topilmadi" });
    }

    await ticketStatus.update(req.body);

    res.status(200).json(ticketStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTicketStatus = async (req, res) => {
  try {
    const ticketStatus = await TicketStatus.findByPk(req.params.id);

    if (!ticketStatus) {
      return res.status(404).json({ message: "Ticket status topilmadi" });
    }

    await ticketStatus.destroy();

    res.status(200).json({ message: "Ticket status o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTicketStatus,
  getAllTicketStatuses,
  getTicketStatusById,
  updateTicketStatus,
  deleteTicketStatus,
};