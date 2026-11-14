const Joi = require("joi");

const createPaymentMethodSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
});

const updatePaymentMethodSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
});

module.exports = {
  createPaymentMethodSchema,
  updatePaymentMethodSchema,
};