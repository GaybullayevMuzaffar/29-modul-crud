const Gender = require("../models/gender.model");

const createGender = async (req, res) => {
  try {
    const gender = await Gender.create(req.body);

    res.status(201).json({
      message: "Gender created successfully",
      gender,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllGenders = async (req, res) => {
  try {
    const genders = await Gender.findAll();

    res.status(200).json(genders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGenderById = async (req, res) => {
  try {
    const gender = await Gender.findByPk(req.params.id);

    if (!gender) {
      return res.status(404).json({
        message: "Gender not found",
      });
    }

    res.status(200).json(gender);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGender = async (req, res) => {
  try {
    const gender = await Gender.findByPk(req.params.id);

    if (!gender) {
      return res.status(404).json({
        message: "Gender not found",
      });
    }

    await gender.update(req.body);

    res.status(200).json({
      message: "Gender updated successfully",
      gender,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteGender = async (req, res) => {
  try {
    const gender = await Gender.findByPk(req.params.id);

    if (!gender) {
      return res.status(404).json({
        message: "Gender not found",
      });
    }

    await gender.destroy();

    res.status(200).json({
      message: "Gender deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createGender,
  getAllGenders,
  getGenderById,
  updateGender,
  deleteGender,
};