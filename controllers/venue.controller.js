const Venue = require("../models/venue.model");

const createVenue = async (req, res) => {
  try {
    const venue = await Venue.create(req.body);

    res.status(201).json({
      message: "Venue created successfully",
      data: venue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll();

    res.status(200).json({
      data: venues,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);

    if (!venue) {
      return res.status(404).json({
        message: "Venue not found",
      });
    }

    res.status(200).json({
      data: venue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);

    if (!venue) {
      return res.status(404).json({
        message: "Venue not found",
      });
    }

    await venue.update(req.body);

    res.status(200).json({
      message: "Venue updated successfully",
      data: venue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);

    if (!venue) {
      return res.status(404).json({
        message: "Venue not found",
      });
    }

    await venue.destroy();

    res.status(200).json({
      message: "Venue deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createVenue,
  getAllVenues,
  getVenueById,
  updateVenue,
  deleteVenue,
};