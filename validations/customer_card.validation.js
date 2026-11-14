const Joi = require("joi");

const createCustomerCardSchema = Joi.object({
  customer_id: Joi.number().integer().positive().required(),
  name: Joi.string().min(2).max(100).required(),
  phone: Joi.string().required(),
  number: Joi.string().required(),
  year: Joi.string().length(4).required(),
  month: Joi.string().length(2).required(),
  is_active: Joi.boolean().required(),
  is_main: Joi.boolean().required(),
});

const updateCustomerCardSchema = Joi.object({
  customer_id: Joi.number().integer().positive(),
  name: Joi.string().min(2).max(100),
  phone: Joi.string(),
  number: Joi.string(),
  year: Joi.string().length(4),
  month: Joi.string().length(2),
  is_active: Joi.boolean(),
  is_main: Joi.boolean(),
}).min(1);

module.exports = {
  createCustomerCardSchema,
  updateCustomerCardSchema,
};