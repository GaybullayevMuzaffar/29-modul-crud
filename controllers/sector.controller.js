const Sector = require("../models/sector.model");

const createSector = async (req, res) => {
  try {
    const sector = await Sector.create(req.body);

    res.status(201).json({
      message: "Sector created successfully",
      data: sector,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSectors = async (req, res) => {
  try {
    const sectors = await Sector.findAll();

    res.status(200).json({ data: sectors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSectorById = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);

    if (!sector) {
      return res.status(404).json({
        message: "Sector not found",
      });
    }

    res.status(200).json({ data: sector });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSector = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);

    if (!sector) {
      return res.status(404).json({
        message: "Sector not found",
      });
    }

    await sector.update(req.body);

    res.status(200).json({
      message: "Sector updated successfully",
      data: sector,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSector = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);

    if (!sector) {
      return res.status(404).json({
        message: "Sector not found",
      });
    }

    await sector.destroy();

    res.status(200).json({
      message: "Sector deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSector,
  getAllSectors,
  getSectorById,
  updateSector,
  deleteSector,
};