const Joi = require("joi");

const createDeliveryMethodSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
});

const updateDeliveryMethodSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
});

module.exports = {
  createDeliveryMethodSchema,
  updateDeliveryMethodSchema,
};