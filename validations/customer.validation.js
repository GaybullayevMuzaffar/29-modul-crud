const Joi = require("joi");

const createCustomerSchema = Joi.object({
  first_name: Joi.string().min(2).max(100).required(),
  last_name: Joi.string().min(2).max(100).required(),
  phone: Joi.string().min(7).max(20).required(),
  hashed_password: Joi.string().min(20).required(),
  email: Joi.string().email().max(150).required(),
  birth_date: Joi.date().iso().allow(null).optional(),
  gender_id: Joi.number().integer().positive().required(),
  lang_id: Joi.number().integer().positive().required(),
  hashed_refresh_token: Joi.string().allow(null, "").optional(),
});

const updateCustomerSchema = Joi.object({
  first_name: Joi.string().min(2).max(100),
  last_name: Joi.string().min(2).max(100),
  phone: Joi.string().min(7).max(20),
  hashed_password: Joi.string().min(20),
  email: Joi.string().email().max(150),
  birth_date: Joi.date().iso().allow(null),
  gender_id: Joi.number().integer().positive(),
  lang_id: Joi.number().integer().positive(),
  hashed_refresh_token: Joi.string().allow(null, ""),
}).min(1);

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
};