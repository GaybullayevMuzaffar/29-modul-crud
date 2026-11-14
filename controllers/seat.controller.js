const Seat = require("../models/seat.model");

const createSeat = async (req, res) => {
  try {
    const seat = await Seat.create(req.body);

    res.status(201).json({
      message: "Seat created successfully",
      data: seat,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSeats = async (req, res) => {
  try {
    const seats = await Seat.findAll();

    res.status(200).json({ data: seats });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);

    if (!seat) {
      return res.status(404).json({
        message: "Seat not found",
      });
    }

    res.status(200).json({ data: seat });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);

    if (!seat) {
      return res.status(404).json({
        message: "Seat not found",
      });
    }

    await seat.update(req.body);

    res.status(200).json({
      message: "Seat updated successfully",
      data: seat,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);

    if (!seat) {
      return res.status(404).json({
        message: "Seat not found",
      });
    }

    await seat.destroy();

    res.status(200).json({
      message: "Seat deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSeat,
  getAllSeats,
  getSeatById,
  updateSeat,
  deleteSeat,
};