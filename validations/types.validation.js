const Joi = require("joi");

const createTypesSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
});

const updateTypesSchema = Joi.object({
  name: Joi.string().min(2).max(100),
}).min(1);

module.exports = {
  createTypesSchema,
  updateTypesSchema,
};