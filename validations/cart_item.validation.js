const Joi = require("joi");

const createCartItemSchema = Joi.object({
  ticket_id: Joi.number().integer().positive().required(),
  cart_id: Joi.number().integer().positive().required(),
});

const updateCartItemSchema = Joi.object({
  ticket_id: Joi.number().integer().positive(),
  cart_id: Joi.number().integer().positive(),
}).min(1);

module.exports = {
  createCartItemSchema,
  updateCartItemSchema,
};