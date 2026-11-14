const Joi = require("joi");

const createFlatSchema = Joi.object({
  etaj: Joi.number().integer().required(),
  finish_date: Joi.string().required(),
});

const updateFlatSchema = Joi.object({
  etaj: Joi.number().integer(),
  finish_date: Joi.string(),
}).min(1);

module.exports = {
  createFlatSchema,
  updateFlatSchema,
};