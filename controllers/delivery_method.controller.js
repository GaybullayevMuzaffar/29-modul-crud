const DeliveryMethod = require("../models/delivery_method.model");

const createDeliveryMethod = async (req, res) => {
  try {
    const deliveryMethod = await DeliveryMethod.create(req.body);
    res.status(201).json(deliveryMethod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllDeliveryMethods = async (req, res) => {
  try {
    const deliveryMethods = await DeliveryMethod.findAll();
    res.status(200).json(deliveryMethods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDeliveryMethodById = async (req, res) => {
  try {
    const deliveryMethod = await DeliveryMethod.findByPk(req.params.id);

    if (!deliveryMethod) {
      return res.status(404).json({ message: "Delivery method topilmadi" });
    }

    res.status(200).json(deliveryMethod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDeliveryMethod = async (req, res) => {
  try {
    const deliveryMethod = await DeliveryMethod.findByPk(req.params.id);

    if (!deliveryMethod) {
      return res.status(404).json({ message: "Delivery method topilmadi" });
    }

    await deliveryMethod.update(req.body);
    res.status(200).json(deliveryMethod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDeliveryMethod = async (req, res) => {
  try {
    const deliveryMethod = await DeliveryMethod.findByPk(req.params.id);

    if (!deliveryMethod) {
      return res.status(404).json({ message: "Delivery method topilmadi" });
    }

    await deliveryMethod.destroy();
    res.status(200).json({ message: "Delivery method o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDeliveryMethod,
  getAllDeliveryMethods,
  getDeliveryMethodById,
  updateDeliveryMethod,
  deleteDeliveryMethod,
};