const VenueTypes = require("../models/venue_types.model");

const createVenueTypes = async (req, res) => {
  try {
    const venueTypes = await VenueTypes.create(req.body);

    res.status(201).json({
      message: "Venue types created successfully",
      data: venueTypes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllVenueTypes = async (req, res) => {
  try {
    const venueTypes = await VenueTypes.findAll();

    res.status(200).json({
      data: venueTypes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVenueTypesById = async (req, res) => {
  try {
    const venueTypes = await VenueTypes.findByPk(req.params.id);

    if (!venueTypes) {
      return res.status(404).json({
        message: "Venue types not found",
      });
    }

    res.status(200).json({
      data: venueTypes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVenueTypes = async (req, res) => {
  try {
    const venueTypes = await VenueTypes.findByPk(req.params.id);

    if (!venueTypes) {
      return res.status(404).json({
        message: "Venue types not found",
      });
    }

    await venueTypes.update(req.body);

    res.status(200).json({
      message: "Venue types updated successfully",
      data: venueTypes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVenueTypes = async (req, res) => {
  try {
    const venueTypes = await VenueTypes.findByPk(req.params.id);

    if (!venueTypes) {
      return res.status(404).json({
        message: "Venue types not found",
      });
    }

    await venueTypes.destroy();

    res.status(200).json({
      message: "Venue types deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createVenueTypes,
  getAllVenueTypes,
  getVenueTypesById,
  updateVenueTypes,
  deleteVenueTypes,
};