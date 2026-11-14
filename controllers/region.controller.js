const Region = require("../models/region.model");

// CREATE
const createRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body);

    res.status(201).json({
      message: "Region created successfully",
      data: region,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// READ ALL
const getAllRegions = async (req, res) => {
  try {
    const regions = await Region.findAll();

    res.status(200).json(regions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// READ ONE
const getRegionById = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);

    if (!region) {
      return res.status(404).json({
        message: "Region not found",
      });
    }

    res.status(200).json(region);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE
const updateRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);

    if (!region) {
      return res.status(404).json({
        message: "Region not found",
      });
    }

    await region.update(req.body);

    res.status(200).json({
      message: "Region updated successfully",
      data: region,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE
const deleteRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);

    if (!region) {
      return res.status(404).json({
        message: "Region not found",
      });
    }

    await region.destroy();

    res.status(200).json({
      message: "Region deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createRegion,
  getAllRegions,
  getRegionById,
  updateRegion,
  deleteRegion,
};