const Joi = require("joi");

const createDiscountSchema = Joi.object({
  discount: Joi.string().min(1).max(100).required(),
  finish_date: Joi.date().iso().required(),
});

const updateDiscountSchema = Joi.object({
  discount: Joi.string().min(1).max(100),
  finish_date: Joi.date().iso(),
}).min(1);

module.exports = {
  createDiscountSchema,
  updateDiscountSchema,
};