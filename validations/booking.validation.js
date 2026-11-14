const Joi = require("joi");

const createBookingSchema = Joi.object({
  cart_id: Joi.number().integer().positive().required(),
  createdAt: Joi.date().iso().optional(),
  finishedAt: Joi.date().iso().allow(null).optional(),
  payment_method_id: Joi.number().integer().positive().required(),
  delivery_method_id: Joi.number().integer().positive().required(),
  discount_id: Joi.number().integer().positive().allow(null).optional(),
  status_id: Joi.number().integer().positive().required(),
});

const updateBookingSchema = Joi.object({
  cart_id: Joi.number().integer().positive(),
  createdAt: Joi.date().iso(),
  finishedAt: Joi.date().iso().allow(null),
  payment_method_id: Joi.number().integer().positive(),
  delivery_method_id: Joi.number().integer().positive(),
  discount_id: Joi.number().integer().positive().allow(null),
  status_id: Joi.number().integer().positive(),
}).min(1);

module.exports = {
  createBookingSchema,
  updateBookingSchema,
};