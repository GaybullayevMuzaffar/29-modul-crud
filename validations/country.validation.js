const Joi = require("joi");

const createCountrySchema = Joi.object({
  country_name: Joi.string().min(2).max(100).required(),
});

const updateCountrySchema = Joi.object({
  country_name: Joi.string().min(2).max(100).required(),
});

module.exports = {
  createCountrySchema,
  updateCountrySchema,
};