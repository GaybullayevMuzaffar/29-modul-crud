const CartItem = require("../models/cart_item.model");

const createCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCartItemById = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item topilmadi" });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item topilmadi" });
    }

    await cartItem.update(req.body);
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item topilmadi" });
    }

    await cartItem.destroy();
    res.status(200).json({ message: "Cart item o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCartItem,
  getAllCartItems,
  getCartItemById,
  updateCartItem,
  deleteCartItem,
};