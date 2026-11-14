const Joi = require("joi");

const createLangSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
});

const updateLangSchema = Joi.object({
  name: Joi.string().min(2).max(100),
}).min(1);

module.exports = {
  createLangSchema,
  updateLangSchema,
};