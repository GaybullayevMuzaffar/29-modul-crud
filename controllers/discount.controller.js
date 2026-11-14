const Discount = require("../models/discount.model");

const createDiscount = async (req, res) => {
  try {
    const discount = await Discount.create(req.body);
    res.status(201).json(discount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    res.status(200).json(discounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);

    if (!discount) {
      return res.status(404).json({ message: "Discount topilmadi" });
    }

    res.status(200).json(discount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);

    if (!discount) {
      return res.status(404).json({ message: "Discount topilmadi" });
    }

    await discount.update(req.body);
    res.status(200).json(discount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);

    if (!discount) {
      return res.status(404).json({ message: "Discount topilmadi" });
    }

    await discount.destroy();
    res.status(200).json({ message: "Discount o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDiscount,
  getAllDiscounts,
  getDiscountById,
  updateDiscount,
  deleteDiscount,
};