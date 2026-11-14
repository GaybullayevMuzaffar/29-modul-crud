const District = require("../models/district.model");

// CREATE
const createDistrict = async (req, res) => {
  try {
    const district = await District.create(req.body);

    res.status(201).json({
      message: "District created successfully",
      data: district,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// READ ALL
const getAllDistricts = async (req, res) => {
  try {
    const districts = await District.findAll();

    res.status(200).json(districts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// READ ONE
const getDistrictById = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);

    if (!district) {
      return res.status(404).json({
        message: "District not found",
      });
    }

    res.status(200).json(district);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE
const updateDistrict = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);

    if (!district) {
      return res.status(404).json({
        message: "District not found",
      });
    }

    await district.update(req.body);

    res.status(200).json({
      message: "District updated successfully",
      data: district,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE
const deleteDistrict = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);

    if (!district) {
      return res.status(404).json({
        message: "District not found",
      });
    }

    await district.destroy();

    res.status(200).json({
      message: "District deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createDistrict,
  getAllDistricts,
  getDistrictById,
  updateDistrict,
  deleteDistrict,
};