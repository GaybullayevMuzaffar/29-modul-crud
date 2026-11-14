const Country = require("../models/country.model");

// CREATE
const createCountry = async (req, res) => {
  try {
    const country = await Country.create(req.body);

    res.status(201).json({
      message: "Country created successfully",
      data: country,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// READ ALL
const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();

    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// READ ONE
const getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);

    if (!country) {
      return res.status(404).json({
        message: "Country not found",
      });
    }

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE
const updateCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);

    if (!country) {
      return res.status(404).json({
        message: "Country not found",
      });
    }

    await country.update(req.body);

    res.status(200).json({
      message: "Country updated successfully",
      data: country,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE
const deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);

    if (!country) {
      return res.status(404).json({
        message: "Country not found",
      });
    }

    await country.destroy();

    res.status(200).json({
      message: "Country deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCountry,
  getAllCountries,
  getCountryById,
  updateCountry,
  deleteCountry,
};