const Joi = require("joi");

const createCustomerAddressSchema = Joi.object({
  customer_id: Joi.number().integer().positive().required(),
  name: Joi.string().min(2).max(100).required(),
  region_id: Joi.number().integer().positive().required(),
  district_id: Joi.number().integer().positive().required(),
  street: Joi.string().required(),
  house: Joi.string().required(),
  flat_id: Joi.number().integer().positive().allow(null).optional(),
  location: Joi.string().allow("", null).optional(),
  post_index: Joi.string().allow("", null).optional(),
  info: Joi.string().allow("", null).optional(),
});

const updateCustomerAddressSchema = Joi.object({
  customer_id: Joi.number().integer().positive(),
  name: Joi.string().min(2).max(100),
  region_id: Joi.number().integer().positive(),
  district_id: Joi.number().integer().positive(),
  street: Joi.string(),
  house: Joi.string(),
  flat_id: Joi.number().integer().positive().allow(null),
  location: Joi.string().allow("", null),
  post_index: Joi.string().allow("", null),
  info: Joi.string().allow("", null),
}).min(1);

module.exports = {
  createCustomerAddressSchema,
  updateCustomerAddressSchema,
};