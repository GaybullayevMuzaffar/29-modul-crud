const Flat = require("../models/flat.model");

const createFlat = async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    res.status(201).json(flat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFlats = async (req, res) => {
  try {
    const flats = await Flat.findAll();
    res.status(200).json(flats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFlatById = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);

    if (!flat) {
      return res.status(404).json({ message: "Flat topilmadi" });
    }

    res.status(200).json(flat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFlat = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);

    if (!flat) {
      return res.status(404).json({ message: "Flat topilmadi" });
    }

    await flat.update(req.body);
    res.status(200).json(flat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFlat = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);

    if (!flat) {
      return res.status(404).json({ message: "Flat topilmadi" });
    }

    await flat.destroy();
    res.status(200).json({ message: "Flat o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFlat,
  getAllFlats,
  getFlatById,
  updateFlat,
  deleteFlat,
};