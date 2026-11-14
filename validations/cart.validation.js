const Joi = require("joi");

const createCartSchema = Joi.object({
  customer_id: Joi.number().integer().positive().required(),
  createdAt: Joi.date().iso().optional(),
  finishedAt: Joi.date().iso().allow(null).optional(),
  status_id: Joi.number().integer().positive().required(),
});

const updateCartSchema = Joi.object({
  customer_id: Joi.number().integer().positive(),
  createdAt: Joi.date().iso(),
  finishedAt: Joi.date().iso().allow(null),
  status_id: Joi.number().integer().positive(),
}).min(1);

module.exports = {
  createCartSchema,
  updateCartSchema,
};