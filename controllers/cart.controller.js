const Cart = require("../models/cart.model");

const createCart = async (req, res) => {
  try {
    const cart = await Cart.create({
      ...req.body,
      createdAt: req.body.createdAt || new Date(),
    });

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);

    if (!cart) {
      return res.status(404).json({ message: "Cart topilmadi" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);

    if (!cart) {
      return res.status(404).json({ message: "Cart topilmadi" });
    }

    await cart.update(req.body);

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);

    if (!cart) {
      return res.status(404).json({ message: "Cart topilmadi" });
    }

    await cart.destroy();

    res.status(200).json({ message: "Cart o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCart,
  getAllCarts,
  getCartById,
  updateCart,
  deleteCart,
};