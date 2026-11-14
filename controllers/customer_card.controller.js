const CustomerCard = require("../models/customer_card.model");

const createCustomerCard = async (req, res) => {
  try {
    const customerCard = await CustomerCard.create(req.body);
    res.status(201).json(customerCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCustomerCards = async (req, res) => {
  try {
    const customerCards = await CustomerCard.findAll();
    res.status(200).json(customerCards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomerCardById = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id);

    if (!customerCard) {
      return res.status(404).json({ message: "Customer card topilmadi" });
    }

    res.status(200).json(customerCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCustomerCard = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id);

    if (!customerCard) {
      return res.status(404).json({ message: "Customer card topilmadi" });
    }

    await customerCard.update(req.body);
    res.status(200).json(customerCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCustomerCard = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id);

    if (!customerCard) {
      return res.status(404).json({ message: "Customer card topilmadi" });
    }

    await customerCard.destroy();
    res.status(200).json({ message: "Customer card o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCustomerCard,
  getAllCustomerCards,
  getCustomerCardById,
  updateCustomerCard,
  deleteCustomerCard,
};