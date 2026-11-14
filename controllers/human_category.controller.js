const HumanCategory = require("../models/human_category.model");

const createHumanCategory = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.create(req.body);

    res.status(201).json({
      message: "Human category created successfully",
      humanCategory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllHumanCategories = async (req, res) => {
  try {
    const humanCategories = await HumanCategory.findAll();

    res.status(200).json(humanCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHumanCategoryById = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id);

    if (!humanCategory) {
      return res.status(404).json({
        message: "Human category not found",
      });
    }

    res.status(200).json(humanCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateHumanCategory = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id);

    if (!humanCategory) {
      return res.status(404).json({
        message: "Human category not found",
      });
    }

    await humanCategory.update(req.body);

    res.status(200).json({
      message: "Human category updated successfully",
      humanCategory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteHumanCategory = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id);

    if (!humanCategory) {
      return res.status(404).json({
        message: "Human category not found",
      });
    }

    await humanCategory.destroy();

    res.status(200).json({
      message: "Human category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createHumanCategory,
  getAllHumanCategories,
  getHumanCategoryById,
  updateHumanCategory,
  deleteHumanCategory,
};