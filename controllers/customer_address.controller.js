const CustomerAddress = require("../models/customer_address.model");

const createCustomerAddress = async (req, res) => {
  try {
    const address = await CustomerAddress.create(req.body);
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCustomerAddresses = async (req, res) => {
  try {
    const addresses = await CustomerAddress.findAll();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomerAddressById = async (req, res) => {
  try {
    const address = await CustomerAddress.findByPk(req.params.id);

    if (!address) {
      return res.status(404).json({ message: "Customer address topilmadi" });
    }

    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCustomerAddress = async (req, res) => {
  try {
    const address = await CustomerAddress.findByPk(req.params.id);

    if (!address) {
      return res.status(404).json({ message: "Customer address topilmadi" });
    }

    await address.update(req.body);
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCustomerAddress = async (req, res) => {
  try {
    const address = await CustomerAddress.findByPk(req.params.id);

    if (!address) {
      return res.status(404).json({ message: "Customer address topilmadi" });
    }

    await address.destroy();
    res.status(200).json({ message: "Customer address o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCustomerAddress,
  getAllCustomerAddresses,
  getCustomerAddressById,
  updateCustomerAddress,
  deleteCustomerAddress,
};