const SeatType = require("../models/seat_type.model");

const createSeatType = async (req, res) => {
  try {
    const seatType = await SeatType.create(req.body);

    res.status(201).json({
      message: "Seat type created successfully",
      data: seatType,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSeatTypes = async (req, res) => {
  try {
    const seatTypes = await SeatType.findAll();

    res.status(200).json({ data: seatTypes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSeatTypeById = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);

    if (!seatType) {
      return res.status(404).json({
        message: "Seat type not found",
      });
    }

    res.status(200).json({ data: seatType });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSeatType = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);

    if (!seatType) {
      return res.status(404).json({
        message: "Seat type not found",
      });
    }

    await seatType.update(req.body);

    res.status(200).json({
      message: "Seat type updated successfully",
      data: seatType,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSeatType = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);

    if (!seatType) {
      return res.status(404).json({
        message: "Seat type not found",
      });
    }

    await seatType.destroy();

    res.status(200).json({
      message: "Seat type deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSeatType,
  getAllSeatTypes,
  getSeatTypeById,
  updateSeatType,
  deleteSeatType,
};