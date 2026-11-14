const VenuePhoto = require("../models/venue_photo.model");

const createVenuePhoto = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.create(req.body);

    res.status(201).json({
      message: "Venue photo created successfully",
      data: venuePhoto,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllVenuePhotos = async (req, res) => {
  try {
    const venuePhotos = await VenuePhoto.findAll();

    res.status(200).json({
      data: venuePhotos,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVenuePhotoById = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id);

    if (!venuePhoto) {
      return res.status(404).json({
        message: "Venue photo not found",
      });
    }

    res.status(200).json({
      data: venuePhoto,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVenuePhoto = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id);

    if (!venuePhoto) {
      return res.status(404).json({
        message: "Venue photo not found",
      });
    }

    await venuePhoto.update(req.body);

    res.status(200).json({
      message: "Venue photo updated successfully",
      data: venuePhoto,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVenuePhoto = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id);

    if (!venuePhoto) {
      return res.status(404).json({
        message: "Venue photo not found",
      });
    }

    await venuePhoto.destroy();

    res.status(200).json({
      message: "Venue photo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createVenuePhoto,
  getAllVenuePhotos,
  getVenuePhotoById,
  updateVenuePhoto,
  deleteVenuePhoto,
};