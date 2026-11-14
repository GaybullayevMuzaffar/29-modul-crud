const Types = require("../models/types.model");

const createTypes = async (req, res) => {
  try {
    const type = await Types.create(req.body);

    res.status(201).json({
      message: "Type created successfully",
      data: type,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTypes = async (req, res) => {
  try {
    const types = await Types.findAll();

    res.status(200).json({
      data: types,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTypesById = async (req, res) => {
  try {
    const type = await Types.findByPk(req.params.id);

    if (!type) {
      return res.status(404).json({
        message: "Type not found",
      });
    }

    res.status(200).json({
      data: type,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTypes = async (req, res) => {
  try {
    const type = await Types.findByPk(req.params.id);

    if (!type) {
      return res.status(404).json({
        message: "Type not found",
      });
    }

    await type.update(req.body);

    res.status(200).json({
      message: "Type updated successfully",
      data: type,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTypes = async (req, res) => {
  try {
    const type = await Types.findByPk(req.params.id);

    if (!type) {
      return res.status(404).json({
        message: "Type not found",
      });
    }

    await type.destroy();

    res.status(200).json({
      message: "Type deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTypes,
  getAllTypes,
  getTypesById,
  updateTypes,
  deleteTypes,
};