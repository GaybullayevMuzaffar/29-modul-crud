const PaymentMethod = require("../models/payment_method.model");

const createPaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.create(req.body);
    res.status(201).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.findAll();
    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPaymentMethodById = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(req.params.id);

    if (!paymentMethod) {
      return res.status(404).json({ message: "Payment method topilmadi" });
    }

    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(req.params.id);

    if (!paymentMethod) {
      return res.status(404).json({ message: "Payment method topilmadi" });
    }

    await paymentMethod.update(req.body);
    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(req.params.id);

    if (!paymentMethod) {
      return res.status(404).json({ message: "Payment method topilmadi" });
    }

    await paymentMethod.destroy();
    res.status(200).json({ message: "Payment method o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPaymentMethod,
  getAllPaymentMethods,
  getPaymentMethodById,
  updatePaymentMethod,
  deletePaymentMethod,
};