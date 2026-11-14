const Joi = require("joi");

const createGenderSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
});

const updateGenderSchema = Joi.object({
  name: Joi.string().min(2).max(100),
}).min(1);

module.exports = {
  createGenderSchema,
  updateGenderSchema,
};