const Lang = require("../models/lang.model");

const createLang = async (req, res) => {
  try {
    const lang = await Lang.create(req.body);

    res.status(201).json({
      message: "Language created successfully",
      lang,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllLangs = async (req, res) => {
  try {
    const langs = await Lang.findAll();

    res.status(200).json(langs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLangById = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);

    if (!lang) {
      return res.status(404).json({
        message: "Language not found",
      });
    }

    res.status(200).json(lang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLang = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);

    if (!lang) {
      return res.status(404).json({
        message: "Language not found",
      });
    }

    await lang.update(req.body);

    res.status(200).json({
      message: "Language updated successfully",
      lang,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLang = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);

    if (!lang) {
      return res.status(404).json({
        message: "Language not found",
      });
    }

    await lang.destroy();

    res.status(200).json({
      message: "Language deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLang,
  getAllLangs,
  getLangById,
  updateLang,
  deleteLang,
};